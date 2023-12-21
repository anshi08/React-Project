// import { useState } from 'react'
// import CounterThree from './CounterThree'
// import HookMouse from './HookMouse'
// import HookUseEffect from './HookUseEffect'
// import UseEffectWithCleanCode from './UseEffectWithCleanCode'
// import UseStateWithArray from './UseStateWithArray'
// import DataFetchingTwo from "./DataFetchingTwo"
// import IntervalHookCounter from "./IntervalHookCounter"
// import DataFetching from "./dataFetching"
import DataFetchingThree from "./DataFetchingThree"

function App() {
  // Js
  // let counter = 0

  // const increaseValue = () =>{
  //   console.log("before",counter)
  //    counter = counter + 1
  //   console.log("after",counter)
  // }

  //useState
  
//   let initialValue = 0;
//   let [counter,setCounter] = useState(initialValue)

//   const increaseValue = () =>{
//      setCounter(counter=>counter+1)
//   }

//   const decreaseValue = () =>{
//     setCounter(counter=>counter-1)
//  }

//  const resetValue = () => {
//     setCounter(initialValue)
//  }

//  //UseState With Previou State
//  const incrementFive = () =>{
//       setCounter(prevCount => prevCount + 5)
//       // setCounter((prevState) => {
//       //   if(prevState < 4){
//       //     console.log("Prev",prevState + 5)
//       //   }
//       // })
//  }

  return (
    <>
      {/* <h2>Counter {counter} </h2>
      <button onClick={resetValue}>Reset Value</button><br/><br/>
      <button onClick={increaseValue}>Increment</button><br/><br/>
      <button onClick={decreaseValue}>Decrement</button><br/><br/>
      <button onClick={incrementFive}>Increment by 5</button> */}
      {/* <CounterThree /> */}
      {/* <UseStateWithArray /> */}
      {/* <HookUseEffect /> */}
      {/* <HookMouse /> */}
      {/* <UseEffectWithCleanCode /> */}
      {/* <IntervalHookCounter /> */}
      {/* <DataFetching /> */}
      {/* <DataFetchingTwo/> */}
      <DataFetchingThree />
    </>
  )
}

export default App
