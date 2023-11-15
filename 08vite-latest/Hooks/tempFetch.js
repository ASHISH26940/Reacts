// import React, { useEffect, useState } from 'react'

// const tempFetch = (lat,lon) => {
//   const [data,setdata]=useState(null)
//   const [load,setload]=useState(false)
//   const [err,seterr]=useState(null)

//   useEffect(()=>{
//     const fetchTemp=async () => {
        
//         try{
//           const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d12e5ab9acce8b77a0e58a4fb1f97a5b`);
        
//         if(!res.ok){
//           throw new Error(`HTTP error!Status:,${data.status}`)
//         }

//         const result=await res.json();
//         setdata(result)
//         console.log(result);
//         }catch(error)
//           {seterr(err.message)}
//           finally{
//             setload(false)
//           }
//     }

//     fetchTemp();
    
//   },[lat,lon]);

//   return {data,load,err}
// }

// export default tempFetch

import React, { useEffect, useState } from 'react';

const tempFetch = ({ lat, lon }) => {
  const [temp, setTemp] = useState('');
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoad(true);
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d12e5ab9acce8b77a0e58a4fb1f97a5b`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setTemp(result.main.temp)
        console.log(temp);
      } catch (error) {
        setErr(error.message);
      } finally {
        setLoad(false);
      }
    };

    fetchData();

  }, [lat, lon]);

  return { temp, load, err };
};

export default tempFetch;
