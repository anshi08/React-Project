import { useState } from 'react'

function App() {
  // Js
  // let counter = 0

  // const increaseValue = () =>{
  //   console.log("before",counter)
  //    counter = counter + 1
  //   console.log("after",counter)
  // }

  //useState
  
  let initialValue = 0;
  let [counter,setCounter] = useState(initialValue)

  const increaseValue = () =>{
     setCounter(counter=>counter+1)
  }

  const decreaseValue = () =>{
    setCounter(counter=>counter-1)
 }

 const resetValue = () => {
    setCounter(initialValue)
 }

 //UseState With Previou State
 const incrementFive = () =>{
      setCounter(prevCount => prevCount + 5)
 }

  return (
    <>
      <h2>Counter {counter} </h2>
      <button onClick={resetValue}>Reset Value</button><br/><br/>
      <button onClick={increaseValue}>Increment</button><br/><br/>
      <button onClick={decreaseValue}>Decrement</button><br/><br/>
      <button onClick={incrementFive}>Increment by 5</button>
    </>
  )
}

export default App
