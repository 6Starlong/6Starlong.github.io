// 参考 https://github.com/vuejs/vitepress/blob/main/scripts/release.js
const fs = require('fs')
const path = require('path')
const chalk = require('chalk') // 终端字符串字体颜色
const semver = require('semver') // 版本范围查看器
const { prompt } = require('enquirer') // CLI 提交提示
const execa = require('execa') // 执行命令行指令
const currentVersion = require('../package.json').version

const versionIncrements = ['patch', 'minor', 'major']

const inc = (i) => semver.inc(currentVersion, i)
const run = (bin, args, opts = {}) => execa(bin, args, { stdio: 'inherit', ...opts })
const step = (msg) => console.log(chalk.cyan(msg))

async function main() {
  let targetVersion
  const { release } = await prompt({
    type: 'select',
    name: 'release',
    message: 'Select release type',
    choices: versionIncrements.map((i) => `${i} (${inc(i)})`).concat(['custom'])
  })

  // 输入自定义版本号
  if (release === 'custom') {
    targetVersion = (
      await prompt({
        type: 'input',
        name: 'version',
        message: 'Input custom version',
        initial: currentVersion
      })
    ).version
  } else {
    targetVersion = release.match(/\((.*)\)/)[1]
  }

  // 无效版本号
  if (!semver.valid(targetVersion)) {
    throw new Error(`Invalid target version: ${targetVersion}`)
  }

  const { yes: tagOk } = await prompt({
    type: 'confirm',
    name: 'yes',
    message: `Releasing v${targetVersion}. Confirm?`
  })

  if (!tagOk) return

  // Update the package version.
  step('\nUpdating the package version...')
  updatePackage(targetVersion)

  // Build the package. (已使用github的workflows自动化部署，此处无须打包)
  // step('\nBuilding the package...');
  // await run('yarn', ['docs:build']);

  // Generate the changelog. TODO:集成prettier
  step('\nGenerating the changelog...')
  await run('yarn', ['changelog'])
  // await run('yarn', ['prettier', '--write', 'CHANGELOG.md']);

  const { yes: changelogOk } = await prompt({
    type: 'confirm',
    name: 'yes',
    message: `Changelog generated. Does it look good?`
  })

  if (!changelogOk) return

  // Commit changes to the Git and create a tag.
  step('\nCommitting changes...')
  await run('git', ['add', 'CHANGELOG.md', 'package.json'])
  await run('git', ['commit', '-m', `release: v${targetVersion}`])
  await run('git', ['tag', `v${targetVersion}`])

  // Publish the package. (暂无发布)
  // step('\nPublishing the package...');
  // await run('yarn', ['publish', '--ignore-scripts', '--no-git-checks']);

  // Push to GitHub.
  step('\nPushing to GitHub...')
  await run('git', ['push', 'origin', `refs/tags/v${targetVersion}`])
  await run('git', ['push'])
}

function updatePackage(version) {
  const pkgPath = path.resolve(path.resolve(__dirname, '..'), 'package.json')
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))

  pkg.version = version

  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n')
}

main().catch((err) => console.error(err))
