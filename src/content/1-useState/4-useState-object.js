import React, { useState } from 'react'

const UseStateObject = () => {
  const personObj = {
    name: 'Peter',
    age: 24,
    message: 'hey, im peter !',
  }

  const [person, setPerson] = useState(personObj)

  const changeMessage = () => {
    setPerson({ ...person, message: 'I have been changed' })
  }

  return (
    <>
      <h2>useState object example</h2>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={changeMessage}>
        Change message
      </button>
    </>
  )
}

export default UseStateObject
