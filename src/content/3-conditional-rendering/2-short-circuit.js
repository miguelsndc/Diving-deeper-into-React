import React, { useState } from 'react'
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false)

  const firstValue = text || 'hello world'
  const secondValue = text && 'hello world'

  return (
    <>
      {/* <h1>1st value: {firstValue}</h1>
      <h1>2nd value: {secondValue}</h1> */}
      <h2>{text || 'John Doe'}</h2>
      <button className='btn' onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      <h2>{isError && <h1>Error</h1>}</h2>
      {isError ? (
        <h2>there is an error</h2>
      ) : (
        <div>
          <h2>there is no error</h2>
        </div>
      )}
    </>
  )
}

export default ShortCircuit
