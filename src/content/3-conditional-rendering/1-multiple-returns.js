import React, { useState, useEffect } from 'react'

const url = 'https://api.github.com/users/QuincyLarson'

const MultipleReturns = () => {
  const [isLoading, setisLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState('Default user')

  const getUserData = () => {
    // this func code is a mess, but it is for learning purposes, i might refactor it someday, pls dont judge
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json()
        } else {
          setisLoading(false)
          setIsError(true)
          throw new Error(res.statusText)
        }
      })
      .then((user) => {
        const { login } = user
        setUser(login)
        setisLoading(false)
      })
      .catch((e) => {
        setIsError(true)
        console.log(e)
      })
  }

  useEffect(() => {
    getUserData()
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>Error</h2>
  }

  return <h2>{user}</h2>
}

export default MultipleReturns
