// 以 data.(j|t)s 结尾的文件将在 Node.js 中进行处理
import path from 'path'
import { sidebar } from '../.vitepress/config'
import { spawn } from 'cross-spawn'

// 默认导出 Object，并包含一个 load 函数。
export const data = {
  // 声明应该触发 HMR 的文件
  watch: 'src/**',
  // 可以从 fs 读取并生成数据
  load: async () => {
    // 使用基于 git 的 lastUpdated 数据
    return await Promise.all(
      [...sidebar['/frontend/'], ...sidebar['/frame/'], ...sidebar['/stars/']].map(
        async (group) => ({
          text: group.text,
          items: await Promise.all(
            group.items.map(async (item) => ({
              ...item,
              lastUpdated: await getGitTimestamp(pathToFile(item.link))
            }))
          )
        })
      )
    )
  }
}
// 使用 import "data" 解析静态数据
export default { ...data }

// 获取对应文件 的 git commit timestamp
// https://github.com/vuejs/vitepress/blob/main/src/node/utils/getGitTimestamp.ts
function getGitTimestamp(file) {
  return new Promise((resolve, reject) => {
    const child = spawn('git', ['log', '-1', '--pretty="%ci"', file])
    let output = ''
    child.stdout.on('data', (d) => (output += String(d)))
    child.on('close', () => {
      resolve(+new Date(output))
    })
    child.on('error', reject)
  })
}

// 转换文件路径
function pathToFile(filePath) {
  const root = path.resolve(__dirname, '')
  return filePath.charAt(filePath.length - 1) === '/'
    ? root + `${filePath}index.md`
    : root + `${filePath}.md`
}
