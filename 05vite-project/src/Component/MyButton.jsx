import React from 'react'
import { useState } from 'react'

const MyButton = () => {
  const [col, setcol] = useState("olive")
  return (
      <div className="w-full h-screen duration-200" style={{backgroundColor:col}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap gap-3 justify-centergap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
            <button 
            onClick={()=>setcol("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>
            <button onClick={()=>setcol("pink")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"pink"}}>pink</button>
            <button onClick={()=>setcol("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>blue</button>
            <button onClick={()=>setcol("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>green</button>
          </div>
        </div>
      </div>
      
  )
}

export default MyButton