import React from 'react'

const Car = (props) => {
  const { model, price, year } = props.data;
  return (
    <div>
      <div>{model}</div>
      <div>{price}</div>
      <div>{year}</div>
      <div><button className='addToCart'>Add To Cart</button></div>
    </div>
  )
}

export default Car;