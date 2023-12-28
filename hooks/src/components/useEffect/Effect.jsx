import React,{Component, useState} from 'react'
import { useEffect } from 'react'

const Effect = () => {
    const[count,setcount]=useState(0)
    const[age,setAge]=useState(30)
    // useEffect=(()=>{
        
    // },[])
  return (
    <div>
    <h1>Effect</h1>
    <h3>count:{count}</h3>
    <h3>age:{age}</h3>
    <button onClick={()=>{setcount(count+1)}}>+</button>
    <button onClick={()=>{setAge(age-1)}}>-</button>
    </div>
  )
}

export default Effect