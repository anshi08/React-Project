import React, { useEffect, useState } from 'react'

const HookMouse = () => {

    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const logMousePosition = (e) =>{
        console.log("Mouse event")
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
       console.log("Use Effect render")
       window.addEventListener("mousemove", logMousePosition)

       // Component Will Unmount (CleanUp  code)
       return () =>{
        console.log("Component Unmount")
        window.removeEventListener("mousemove" , logMousePosition)
       }
    }, [])  //basically we are telling react that it does not depend on any state or prop 
    //  jb initial render hoga uske bd kuch bhi change ho dubara render nhi krna hai [Call it once]

  return (
    <div>
       Hook x - {x} Y - {y}
    </div>
  )
}

export default HookMouse