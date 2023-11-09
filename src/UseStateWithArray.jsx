import React, { useState } from 'react'

const UseStateWithArray = () => {

    const [items,setItems] = useState([])

    const addItem = () => {
        // alert("hii")
        setItems([...items,{
            id : items.length,    //making an obj and append it ! 
            value : Math.floor(Math.random() * 10) + 1
        }])
    }

  return (
  <div>
     <button onClick={addItem}>Add a number</button>
     <ul>
        {
            items.map(item => (
                <li key={item.id}>{item.value}</li>
            ))
        }
     </ul>
  </div>
  )
}

export default UseStateWithArray