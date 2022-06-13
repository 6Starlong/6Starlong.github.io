import { data as PostsData } from '@src/posts.data'

// 返回过滤排序后的 PostsData。
function filterPosts(page) {
  const pageNum = 6
  const currPage = page || 1
  let postsList = []
  // 将所有文章放入一个数组
  PostsData.forEach((group) => postsList.push(...group.items))
  // 按最后更新时间排序
  postsList.sort((a, b) => b.lastUpdated - a.lastUpdated)
  // 返回过滤后的数组
  return {
    pageNum,
    currPage,
    total: postsList.length,
    posts: postsList.filter(
      (item, index) => index >= currPage * pageNum - pageNum && index < currPage * pageNum
    )
  }
}

export { PostsData, filterPosts }

// 复制 text 内容到粘贴板
export function copyToClip(text) {
  var aux = document.createElement('input')
  aux.setAttribute('value', text)
  document.body.appendChild(aux)
  aux.select()
  document.execCommand('copy')
  document.body.removeChild(aux)
}

/**
 * @description 根据滚动高度动态切换导航栏样式
 * @param {string} element 导航栏元素
 * @param {string} className 元素Class
 * @param {number} offset 高度限制
 * @param {function} scrollFunc 滚动函数
 */
export function toggleNavBarClass() {
  let node = $ref()

  function openScrollEvent({ element, className, offset, scrollFunc }) {
    node = { element, className, offset, scrollFunc }
    element.classList.add(className)
    window.addEventListener('scroll', handleScroll)
  }

  function closeScrollEvent() {
    let { element, className } = node
    element.classList.remove(className)
    window.removeEventListener('scroll', handleScroll)
  }

  function handleScroll() {
    let { element, className, offset, scrollFunc } = node
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    scrollTop > offset ? element.classList.remove(className) : element.classList.add(className)
    scrollFunc?.(scrollTop)
  }

  return {
    openScrollEvent,
    closeScrollEvent
  }
}
