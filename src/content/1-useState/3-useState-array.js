import React, { useState } from 'react'

import { data } from '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  const removeItem = (id) => {
    setPeople((oldPeople) => {
      const newPeople = people.filter((person) => person.id !== id)
      return newPeople
    })
  }

  return (
    <React.Fragment>
      <h2>useState array example</h2>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button className='btn' onClick={() => removeItem(id)}>
              Remove Item
            </button>
          </div>
        )
      })}
      <button className='btn' onClick={() => setPeople([])}>
        Clear items
      </button>
    </React.Fragment>
  )
}

export default UseStateArray
