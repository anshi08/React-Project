//UseEffect with incorrect Dependency 

import React, { useEffect, useState } from 'react'

const IntervalHookCounter = () => {

    const [count , setCount] = useState(0)

    const tick = () =>{
        console.log("inside Tick")
        // setCount(count + 1)
        // another Way to update count without passing Dependency Array
        setCount(prevCount => prevCount + 1)
    }

    useEffect(()=>{
        console.log("Before setInterval")
        //If You want to call function inside the useEffect then it is better to define it inside useEffect
       const interval = setInterval(tick , 1000)

       //ComponentwillUnmount
       return(()=>{
         clearInterval(interval)
       })
    })

    //[] renders initially
    //[count] it runs when it changes

  return (
    <div>Timer : {count}</div>
  )
}

export default IntervalHookCounter