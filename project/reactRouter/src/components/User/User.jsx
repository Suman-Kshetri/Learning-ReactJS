import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
  return (
    <div
     className='text-center text-2xl font-bold p-40 bg-blue-100'>User: {userId} </div>
  )
}

export default User