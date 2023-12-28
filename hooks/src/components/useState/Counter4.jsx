import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { AppContext } from "../useContext/ParentContext";
const Counter4 = () => {
  const [age, setAge] = useState(18);
  const [sib, setSib] = useState(1);
  const { increaseCount } = useContext(AppContext);
  useEffect(() => {
    return () => {
      console.log("Counter 4 unmounted");
    };
  },[]);
  return (
    <div
      style={{ border: "1px dotted white", padding: "10px", margin: "20px" }}
    >
      <h1>C O U N T E R - 4</h1>
      <h3>Age: {age}</h3>
      <h3>Sibling: {sib}</h3>
      <button
        onClick={() => {
          setAge((prev) => prev + 1);
        }}
      >
        Get Older
      </button>
      <button
        onClick={() => {
          setSib((prev) => prev + 1);
        }}
      >
        Get More Siblings
      </button>
      <button
        onClick={() => {
          setAge(18);
          setSib(1);
        }}
      >
        Reset
      </button>
      <button onClick={increaseCount}>+ Main Count</button>
    </div>
  );
};

export default Counter4;
