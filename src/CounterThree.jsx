// UseState With Object
// Setter function does not automatically merge and update objects
// you have to do this manually (by using spread operator) 

// Spread Operator copies the values of an objects and able to overwrite the old value


import React, { useState } from 'react';

const CounterThree = () => {
    let [name,setName] = useState({"firstName":'',"lastName":''})

  return <>
  <input type='text' value={name.firstName} onChange={e => setName({...name ,firstName : e.target.value})}/>  <br/>
  <input type='text' value={name.lastName} onChange={e => setName({...name ,lastName : e.target.value})}/><br/>

  <h2>My First Name is : {name.firstName}</h2>
  <h2>My Last Name is : {name.lastName}</h2>
  </>
}

export default CounterThree

//Example of Spread Operator

//Merging of Array
// let arr = [1,2,3]

// let arr1 = [4,5,6]

// let newArr = [...arr , ...arr1]

// console.log(newArr)

//Merging of Object
// let obj1 = {"name":"Anshi","age":"35"}
// undefined
// let modify = {...obj1}
// undefined
// modify
// {name: 'Anshi', age: '35'}
// let modify = {...obj1,"age":21}
// undefined
// modify
// {name: 'Anshi', age: 21}