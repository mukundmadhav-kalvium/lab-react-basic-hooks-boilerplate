import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { AppContext } from "../useContext/ParentContext";

const Counter2 = () => {
  let [currAge, setCurrAge] = useState(18);
  let [currSib, setSib] = useState(1);
  let {mainCount} = useContext(AppContext);

  useEffect(()=>{
      console.log("Counter 2 mounted")
  },[Counter2])
  return (
    <div
      style={{ border: "1px dotted white", padding: "10px", margin: "20px" }}
    >
      <h1>C O U N T E R - 2</h1>
      <h4>Age : {currAge}</h4>
      <h4>My Siblings : {currSib}</h4>
      <h4>Main Count : {mainCount}</h4>
      <button
        onClick={() => {
          setCurrAge(currAge + 1);
        }}
      >
        Get Older
      </button>
      <button
        onClick={() => {
          setSib(currSib + 1);
        }}
      >
        Get more siblings
      </button>
      <button onClick={()=>{
        setSib(currSib - 1)
      }}>Decrease Siblings</button>

    </div>
  );
};

export default Counter2;
