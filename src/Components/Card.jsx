import React from 'react'

export const Card = ({imageURL, title}) => {
  console.log(title)
  return (
    <div className="col">
    <div className="card " >
    <img src={imageURL} className="card-img-top" alt={title}/>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>

    </div>
  </div>
  </div>

  )
}
