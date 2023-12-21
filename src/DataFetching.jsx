//Fetching data through API

import React, { useState , useEffect} from 'react'
import axios from 'axios'

const DataFetching = () => {
    
    const [posts , setPosts] = useState([])

    useEffect(()=>{
      axios
        .get('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
          console.log(res)
          setPosts(res.data) 
        })
        .catch(err => {
          console.log(err)
        })
    },[])
  return <>
    <h2>Fetcing data through UseEffect</h2>
     <ul>
        {
          posts.map(post => (
            <li key = {post.id}>{post.title}</li>
          ))
        }
     </ul>
  </>

}
export default DataFetching