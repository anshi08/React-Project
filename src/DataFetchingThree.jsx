import axios from 'axios'
import React, { useEffect, useState } from 'react'

const DataFetchingThree = () => {

    //Blank Object hmesha pass hoga !!
    const [post, setPost] = useState({})
    const [id , setId] = useState(1)
    const [IdFromButtonClick, setIdFromButtonClick] = useState(1)

    useEffect(() => {
        axios
          .get(`https://jsonplaceholder.typicode.com/todos/${IdFromButtonClick}`)
          .then(res => {
            setPost(res.data)
          })
          .catch(err => console.log("Error",err))
    } , [IdFromButtonClick])

    const onHandleSubmit = () => {
        setIdFromButtonClick(id)
    }

  return <>
    <input type='text' value={id} onChange={e => setId(e.target.value)}/>
    <button onClick={onHandleSubmit} >Get Value</button>
    <div>{post.title}</div>
    </>
}

export default DataFetchingThree