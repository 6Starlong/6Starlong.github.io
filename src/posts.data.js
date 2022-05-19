// 以 data.(j|t)s 结尾的文件将在 Node.js 中进行处理
import path from 'path'
import { sidebar } from '../.vitepress/config'
import { spawn } from 'cross-spawn'

// 默认导出 Object，并包含一个 load 函数。使用 import "data" 导入解析后的静态数据。
export default {
  // 声明应该触发 HMR 的文件
  watch: 'src/**',
  // 可以从 fs 读取并生成数据
  load: async () => {
    // 将 lastUpdated 时间设置为 git commit 时间戳
    return await Promise.all(
      [...sidebar['/frontend/'], ...sidebar['/stars/']].map(async (group) => ({
        text: group.text,
        items: await Promise.all(
          group.items.map(async (item) => ({
            ...item,
            lastUpdated: await getGitTimestamp(pathToFile(item.link))
          }))
        )
      }))
    )
  }
}

// 获取文件 git commit timestamp
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
