import { useState } from "react";

const App = () => {

  let [count, setcount] = useState(0)


  // let counter=0;
  const addValue=()=>{
    console.log("clicked",count);
    // counter++;
    if(count<=19)
      setcount(++count)
  }
  const removeValue=()=>{
    console.log("clicked",count);
    // counter--;
    if(count>=1)
      setcount(--count)
  }
  return (
    <>
      <h1>Beginning with counters</h1>
      <h2>Let just fucking start. : {count}</h2>
      <button
      onClick={addValue}>
        Add value {count}
      </button>
      <button
      onClick={removeValue}
      >
        Decrease value
      </button>
      <p>footer {count} </p>
    </>
  )
}

export default App