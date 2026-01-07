import React,{useState} from 'react';

const Counter= () => {
    const [count,setCount]=useState(0);
    const incr=()=>{
        setCount(count+1);
    };
    const decr=()=>{
        if(count==0) return;
        setCount(count-1);
    };
return (
    <div>
        <button className="btn btn-primary" onClick={incr}>Increament+</button>
        <p>Count:{count}</p>
        <button className="btn btn-primary" onClick={decr}>Decreament-</button>
    </div>

);
};

export default Counter;
