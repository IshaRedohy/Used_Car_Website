import React from 'react'
import "../pages/Cars.css"

const Product = (props) => {
  const { car_id, brand, model, color, year } = props.data;
  const imagePath = `http://localhost:3001/images/image_${car_id}.jpeg`;

  return (
    <div>
      <div className='car-image'>
        <img src={imagePath} alt='' className='img-thumbnail'/>
      </div>
      <div>
        <h4 className='links'>{brand}, {model}, {color}, {year}</h4>
      </div>
    </div>
  )
}

export default Product;