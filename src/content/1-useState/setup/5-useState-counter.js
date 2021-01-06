import React, { useState } from 'react'

const UseStateCounter = () => {
  const initialValue = 0

  const [counter, setCounter] = useState(initialValue)

  const increaseCounter = () => setCounter(counter + 1)

  const decreaseCounter = () => setCounter(counter - 1)

  const resetCounter = () => setCounter(initialValue)

  const complexIncrease = () =>
    setTimeout(() => {
      setCounter((prevState) => prevState + 1)
    }, 1500)

  // setTimeout(() => {
  //   setCounter(counter + 1)
  // }, 1000)

  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>Counter</h2>
        <h1>{counter}</h1>
        <button className='btn' onClick={increaseCounter}>
          Increase
        </button>
        <button className='btn' onClick={resetCounter}>
          Reset
        </button>
        <button className='btn' onClick={decreaseCounter}>
          Decrease
        </button>
      </section>
      <section style={{ margin: '4rem 0' }}>
        <h2>More Complex Counter</h2>
        <h1>{counter}</h1>
        <button className='btn' onClick={complexIncrease}>
          Increase later
        </button>
      </section>
    </>
  )
}

export default UseStateCounter
