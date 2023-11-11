import React, { useState } from 'react'
import HookMouse from './HookMouse'

const UseEffectWithCleanCode = () => {

    const [display,setDisplay] = useState(true)
    // console.log(display)

  return (
    <div>
       <button onClick={()=>setDisplay(!display)}>Toggle Button</button>
       {display && <HookMouse />}  
    </div>
  )
}

export default UseEffectWithCleanCode

//If it set to false we render the hook mask Component