import React, { use } from 'react'
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/suman-kshetri')
    //         .then(response => response.json())
    //         .then(data => 
    //         {
    //         console.log(data);
    //         setData(data)
    // })
    // }, [])
  return (
    <div
    className={'text-center text-2xl font-bold p-4 bg-blue-100'}
    >Github Followers: {data.followers}
    <img src={data.avatar_url} alt="git pic" width={300} />
     </div>
  )
}

export default Github

export const githubInfo = async () => {
    const  response = await fetch('https://api.github.com/users/suman-kshetri');
    return response.json();
}