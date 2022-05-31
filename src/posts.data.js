// 以 data.(j|t)s 结尾的文件将在 Node.js 中进行处理
import path from 'path'
import axios from 'axios'
import chalk from 'chalk'
import { spawn } from 'cross-spawn'
import { sidebar } from '../.vitepress/config'

// axios 实例
const instance = axios.create()
instance.interceptors.response.use(
  (response) => response.data.data,
  (error) => Promise.reject(error)
)

// 默认导出 Object，并包含一个 load 函数。
export const data = {
  // 声明应该触发 HMR 的文件
  watch: 'src/**',
  // 可以从 fs 读取并生成数据
  load: async () => {
    // 索引 id
    let index = 1
    // 获取壁纸列表
    const wallhaven = await getWallhaven()
    // 使用基于 git 的 lastUpdated 数据
    return await Promise.all(
      [...sidebar['/frontend/'], ...sidebar['/frame/'], ...sidebar['/stars/']].map(
        async (group) => ({
          text: group.text,
          items: await Promise.all(
            group.items.map(async (item) => ({
              ...item,
              id: index++,
              img: index - 2 < wallhaven.length ? wallhaven[index - 2].thumbs.small : '',
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

/**
 * @description 获取 git commit timestamp
 * @link https://github.com/vuejs/vitepress/blob/main/src/node/utils/getGitTimestamp.ts
 * @param {string} filePath
 * @returns {Promise<number>}
 */
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

// 转换资源文件路径
function pathToFile(filePath) {
  const root = path.resolve(__dirname, '')
  return filePath.charAt(filePath.length - 1) === '/'
    ? root + `${filePath}index.md`
    : root + `${filePath}.md`
}

/**
 * @description 获取 wallhaven 默认收藏列表壁纸
 * @api https://wallhaven.cc/help/api
 * @returns {Promise<Array<{thumbs: {small: string}}>>}
 */
async function getWallhaven() {
  try {
    const collections = await instance(
      'https://wallhaven.cc/api/v1/collections?apikey=DM2rRaTT3Dg6nUwpapWcEmLsi4Lt4nP2'
    )
    return await instance(`https://wallhaven.cc/api/v1/collections/starlong/${collections[0].id}`)
  } catch (error) {
    console.error(chalk.red(error))
  }
}
