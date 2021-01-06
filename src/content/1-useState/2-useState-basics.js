import React, { useState } from 'react'

const UseStateBasics = () => {
  const textContent = 'random title'
  const newTextContent = 'new title'
  const [text, setText] = useState(textContent)
  // const [counter, setCounter] = useState(0)

  const handleClick = () => {
    if (text === textContent) {
      setText(newTextContent)
    } else {
      setText(textContent)
    }
  }

  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        Change title
      </button>
      {/* <h2>{counter}</h2>
      <button className='btn' onClick={handleClick}>
        increase
      </button> */}
    </React.Fragment>
  )
}

export default UseStateBasics
