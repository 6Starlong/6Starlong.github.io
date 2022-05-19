import { computed } from 'vue'
import { data as PostsData } from '@src/posts.data'

// 返回过滤排序后的 PostsData。
const filterPosts = (page) => {
  const pageNum = 10
  const currPage = page || 1
  const postsList = []
  return computed(() => {
    // 将所有文章放入一个数组
    PostsData.forEach((group) => postsList.push(...group.items))
    // 按最后更新时间排序
    postsList.sort((a, b) => b.lastUpdated - a.lastUpdated)
    // 返回过滤后的数组
    return postsList.filter(
      (item, index) => index >= currPage * pageNum - pageNum && index < currPage * pageNum
    )
  })
}

export { PostsData, filterPosts }

// 复制 text 内容到粘贴板
export const copyToClip = (text) => {
  var aux = document.createElement('input')
  aux.setAttribute('value', text)
  document.body.appendChild(aux)
  aux.select()
  document.execCommand('copy')
  document.body.removeChild(aux)
}
