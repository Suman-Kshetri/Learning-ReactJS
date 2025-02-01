import React from 'react'

//or 
//function card({username, title = 'deafult title'}) {
function card(props) {
    console.log(props.username)
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {props.username || 'UserName'}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{props.title|| 'Enter title'}</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
      </div>
  )
}

export default card
