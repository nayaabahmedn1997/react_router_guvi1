import React from 'react'
import { NavBar } from '../Components/NavBar';
import { Card } from '../Components/Card';
export const Home = ({ data, handleData }) => {

  return (
    <div className='container'>
      <NavBar
        active={"All"}

      />
      <div className="mt-5 row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {
          data.map((ele)=>(

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
