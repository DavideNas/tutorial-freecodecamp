import React from 'react'
import ReactDom from 'react-dom'

function Greeting() {
  return <h4>Ciao sono un'app scritta in React</h4>;
}

ReactDom.render(<Greeting />, document.getElementById('root'));
