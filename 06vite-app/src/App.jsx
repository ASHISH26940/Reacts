import React from 'react'
import { useState, useCallback,useEffect,useRef } from 'react'
function App() {
  const [len, setlen] = useState(8);
  const [num, setnum] = useState(false);
  const [chr, setchr] = useState(false);
  const [pass, setpass] = useState("");

  //ref hook
  const passref=useRef(null);

  const passGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (num) str += "0123456789"
    if (chr) str += "!@#$%^&*()-_=+[]{}|;:',.<>/?~"

    for (let i = 1; i <=len;i++)
    {
      let char = Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setpass(pass);


  }, [num, chr, len, setpass])

  useEffect(()=>{passGen()},[num, chr, len,passGen])

  const copyPasswordToClipboard=useCallback(()=>{
      window.navigator.clipboard.writeText(pass)
  },[pass])

  
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500 text-xl pb-4'>
        <h1 className="text-white text-center">Password</h1>
        <div className='flex my-3 mx-3 flex-shadow rounded-lg overflow-hidden'>
          <input type="text"
          value={pass}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passref}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className=' outlime-none bg-blue-700 text-white
           px-3 py-0.5 shrink-0 '>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1
          '></div>
          <input type="range" 
          min={6}
          max={100}
          value={len}
          className='cursor-pointer'
          onChange={(e)=>{setlen(e.target.value)}}
          />
          <label > length:{len}</label>
        </div>
        <div className='flex  items-center text-xs gap-x-1 '>
            <input type="checkbox"
              defaultChecked={num}
              id="numberInput"
              onChange={()=>{
                setnum((prev)=>!prev)
              }}
            />
            <label htmlFor="numberInput ">characters</label>
            <input type="checkbox"
              defaultChecked={num}
              id="numberInput"
              onChange={()=>{
                setnum((prev)=>!prev)
              }}
            />
            <label htmlFor="numberInput ">Numbers</label>
        </div>
      </div>
    </>
  )
}

export default App