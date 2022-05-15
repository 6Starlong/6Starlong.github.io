/**
 * 复制单行内容到粘贴板
 * text: 需要复制的内容
 */
export const copyToClip = (text) => {
  var aux = document.createElement('input')
  aux.setAttribute('value', text)
  document.body.appendChild(aux)
  aux.select()
  document.execCommand('copy')
  document.body.removeChild(aux)
}
