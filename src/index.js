import React from './react'
import ReactDom from './react-dom'

function tick() {
  const element = (
    <div className='wrapper'>
      <h3>时间：{new Date().toLocaleTimeString()}</h3>
    </div>
  )
  ReactDom.render(element, document.getElementById('root'))
}

setInterval(tick, 100)
