import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(
    <>
      <h1>Custom APP???!</h1>
    </>
  )
}

const ReactElement={
  type:'a',
  props:{
      href:'https://google.com',
      target:'_blank'
  },
  children:'Click me to visit google'
}

const anotherElement=(
  <a href="http://google.com" target='_blank'>Visit Google</a>
)

const reactElement=React.createElement(
  'a',
  {
    href:'https://google.com',target:'_blank'
  },
  'click me to render your idea'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // reactElement
  <App/>
)
