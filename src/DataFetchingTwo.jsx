import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DataFetchingTwo = () => {

    //Empty Object cuz single data fetch Ho rha hai
    const [post , setPost] = useState({})
    const [id , setId] = useState(1)

    useEffect(()=>{
        axios
          .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
          .then(res => {
            // console.log(res)
            setPost(res.data)
          })
          .catch(err => {
            console.log(err)
          })
    },[id])  //Now it depends upon ID

  return <>
    <input type='text' value={id} onChange={e => setId(e.target.value)} />
    <div>{post.title}</div>
    {/* <ul>
        {
            post.map(post1 => (
                <li key={post1.id}>{post1.title}</li>
            ))
        }
    </ul> */}
  </>
}

export default DataFetchingTwo