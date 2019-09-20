function setAttribute(dom, key, value) {
  // 当属性名为className时,需转为class
  if (key === 'className') key = 'class'
  // 如果属性是onXXX的形式,则说明是事件监听
  if (/^on\w+/.test(key)) {
    dom[key.toLowerCase()] = value || ''
  } else if (key === 'style') {
    if (value && typeof value === 'string') {
      dom.style.cssText = value
    } else if (value && typeof value === 'object') {
      for (let name in value) {
        dom.style[name] = value[name]
        // typeof value[name] === 'number' ? value[name] + 'px' : value[name]
      }
    }
    // 如果是普通属性,则直接更新
  } else {
    if (key in dom) {
      dom[key] = value || ''
    }
    if (value) {
      dom.setAttribute(key, value)
    } else {
      dom.removeAttribute(key, jvalue)
    }
  }
}

// ReactDom.render
function render(vnode, container) {
  // 当vnode为字符串时,渲染文本节点
  if (typeof vnode === 'string') {
    const textNode = document.createTextNode(vnode)
    return container.appendChild(textNode)
  }
  const dom = document.createElement(vnode.tag)
  if (vnode.attr) {
    Object.keys(vnode.attr).forEach((key) => {
      const value = vnode.attr[key]
      setAttribute(dom, key, value)
    })
  }
  // 遍历子节点
  vnode.children.forEach((child) => render(child, dom))
  return container.appendChild(dom)
}

const ReactDom = {
  render: (vnode, container) => {
    container.innerHTML = ''
    return render(vnode, container)
  }
}

export default ReactDom
