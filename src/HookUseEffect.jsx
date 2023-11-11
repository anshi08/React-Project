//Conditionally run useEffects
import React, { useEffect, useState } from 'react'

const HookUseEffect = () => {

    let [count,setCount] = useState(0)
    let [name,setName] = useState('')

    useEffect(()=>{
        console.log("useEffect -> Runs")
        document.title = `Clicked ${count} times`
    },[count])   //Passing dependency Array !!to render one time jis ui ko load krna hai vo pass hogi

  return (
    <div>
        <input type='text' value={name} onChange={e=>setName(e.target.value)}/>
        <button onClick={()=>{setCount(count+1)}}>Click {count} counts</button>
    </div>
  )
}

export default HookUseEffect