import React, { useEffect, useState } from 'react'
import { NavBar } from '../Components/NavBar'
import { Card } from '../Components/Card';

export const Hacking = ({data, handleData}) => {
  const [newData, setData] = useState([]);

  useEffect(()=>{
    setData([...handleData(data, "hacking")]);
  },[]);
  return (
    <div className='container'>
       <NavBar 
        active={"hacking"}
       />
            <div className="mt-5 row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {
          newData.map((ele)=>(

            <Card
            key={ele.id}
            title={ele.title}
            imageURL={ele.image}
          />
          ))
        }
    </div>
    </div>
  )
}
