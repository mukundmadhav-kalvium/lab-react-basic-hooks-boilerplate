import React, { useContext, useState } from "react";
import { AppContext } from "../useContext/ParentContext";

const Counter3 = () => {
  const [data, setData] = useState({ age: 18, sibling: 1 });
  const {decreaseCount} = useContext(AppContext)
  const handleAge=()=> {
    setData({
      ...data,
      age: data.age + 1,
    });
  }
  const handleSibling=()=> {
    setData({
      ...data,
      sibling: data.sibling + 1,
    });
  }

  const handleData = (key) => {
    setData({
      ...data,
      [key]: data[key] + 1,
    });
  };

  return (
    <div
      style={{ border: "1px dotted white", padding: "10px", margin: "20px" }}
    >
      <h1>C O U N T E R - 3</h1>
      <h3>My Age: {data.age}</h3>
      <h3>Siblings: {data.sibling}</h3>
      <button onClick={handleAge}>Get Older</button>
      <button onClick={handleSibling}>Get More Siblings</button>
      <button onClick={decreaseCount}>- Main Count</button>
    </div>
  );
};

export default Counter3;
