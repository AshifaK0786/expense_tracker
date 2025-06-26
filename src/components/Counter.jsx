import { useState } from "react";
import { useEffect } from "react";

const Counter=()=>{
    const [count1,Setcount1 ]=useState(0);
    const [count2,Setcount2 ]=useState(0);

const handleIncrement1 = () =>{
        Setcount1(count1 +1);
}
const handleIncrement2 = () =>{
        Setcount2(count2 +1);
}
//callback and dependency array
//useEffect is a hook that allows you to perform side effects in function components

useEffect(() =>{
    console.log("effect");
},[]);
console.log("rendering..");
    return (
        <div className="counter">
            <h2>Counter</h2>
            <h3>Count1:{count1}</h3>
            <h3>Count2:{count2}</h3>
            <button onClick={handleIncrement1}>Increment 1</button>
            <button onClick={handleIncrement2}>Increment 2</button>
            
        </div>
    )
}
export default Counter;