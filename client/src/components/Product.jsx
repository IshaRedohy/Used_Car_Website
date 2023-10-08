import React from 'react'

const Product = (props) => {
  const { car_id, brand, model, price } = props.data;
  const imagePath = `http://localhost:3001/images/image_${car_id}.jpeg`;

  return (
    <div>
      <div className='car-image'>
        <img src={imagePath} alt=''/>
      </div>
      <div>{brand}</div>
      <div>{model}</div>
      <div>{price}</div>
      <div className='button'><button>Add To Cart</button></div>
    </div>
  )
}

export default Product;