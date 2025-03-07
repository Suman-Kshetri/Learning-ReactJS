import { useEffect, useState } from 'react'
import './App.css'
import axios, { isCancel } from 'axios'

function App() {
  // const {products, error, loading} = customReactQuery('/api/products')

  //OR: [Scene 1]

  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const [search, setSearch] = useState('')

  
  
  useEffect(() => {

    //handling race condition ie: the req send first will give response first and the recent req will give response later
    const controller = new AbortController()
    //if we want to use await then we need to use IFFE function: we want to halt the program util we get the data from the api
    //we cannot use async-await direclty in useEffect since it is a hook and it does not support async-await
    //so we use IFFE function to use async-await
    ;(async() => {
      try {

        setLoading(true);
        setError(false)
        const reponse = await axios.get('/api/products?search=' + search, {
          signal: controller.signal
        })
        console.log(reponse.data);
        setProducts(reponse.data);
        setLoading(false)
      } catch (error) {
        if(axios.isCancel(error)) {
          console.log('Request canceled', error.message);
          return;
          
        }
        setError(true)
        setLoading(false)
        
      }
      
    })()

    //clean up method
    return () => {
      controller.abort()
    }
  }, [search])

  //if we use search directly as dependecny then when we change character in search input then it will render again and again
  //which will increase the network traffic when we have more than 1k data so we use axios controller [AbortController]
  //  which will abort the request when we change the search input and it will only fetch data when we stop typing




  //Scene 1 and 2
  // if(loading) {
  //   return <h1>Loading...</h1>
  // }
  // if(error) {
  //   return <h1>Error</h1>
  // }

  //scene 3:


  return (
    <>
      <h1>Hello world</h1>

      <input type="text" placeholder='search'
      value={search}
      onChange={(e) => 
        setSearch(e.target.value)
      } 
      />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Someting went wrong</h1>}
      <h2>Number of products are: {products.length}</h2>
    </>
  )
}

export default App

// //OR: [Scene 2]
// const customReactQuery = (urlPath) => {
//   const [products, setProducts] = useState([])
//   const [error, setError] = useState(false)
//   const [loading, setLoading] = useState(false)

//   useEffect(() => {
//     //if we want to use await then we need to use IFFE function: we want to halt the program util we get the data from the api
//     //we cannot use async-await direclty in useEffect since it is a hook and it does not support async-await
//     //so we use IFFE function to use async-await
//     (async() => {
//       try {

//         setLoading(true);
//         setError(false)
//         const reponse = await axios.get(urlPath)
//         console.log(reponse.data);
//         setProducts(reponse.data);
//         setLoading(false)
//       } catch (error) {
//         setError(true)
//         setLoading(false)
//       }
      
//     })()
//   }, [])

//   return {
//     products,
//     error,
//     loading
//   }

// }
