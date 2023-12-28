import React, { useContext, useState } from "react";
import { AppContext } from "../useContext/ParentContext";

const Counter1 = () => {
  let [currAge, setCurrAge] = useState(18);
  let {isDark} = useContext(AppContext);
  return (
    <div
      style={{ border: `${isDark ? "1px dotted white" : "1px dotted black"}`, padding: "10px", margin: "20px", 
      backgroundColor: `${isDark ? "#313131" : "white"}`,
       color:`${isDark ? "white" : "black"}` }}
    >
      <h1>C O U N T E R - 1</h1>
      <h4>Age : {currAge}</h4>
      <button
        onClick={() => {
          setCurrAge(currAge + 1);
        }}
      >
        Get Older
      </button>
      <button
        onClick={() => {
          setCurrAge(currAge - 1);
        }}
      >
        Get Younger
      </button>
      <button
        onClick={() => {
          // setCurrAge(currAge + 10)
          for (let i = 0; i < 10; i++) {
            setCurrAge((previous) => previous + 1);
          }
        }}
      >
        Get 10 years Older
      </button>
      <button
        onClick={() => {
          setCurrAge((currAge = 18));
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter1;
