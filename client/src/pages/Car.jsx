import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Car = () => {
  const { car_id } = useParams();
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/${car_id}`).then((response) => {
      setProductDetails(response.data[0]);
    }).catch((error) => {
      console.error('Error fetching data:', error);
  });
  }, [car_id]);

  const { brand, model, price, color, year, mileage,  } = productDetails;
  const carImage = `http://localhost:3001/images/image_${car_id}.jpeg`;

  return (
    <div>
      <div className='BigImage'>
        <img src={carImage} alt=''/>
      </div>
      <h2>Product Details</h2>
      <div>
        <p><b>Brand:</b> {brand}</p>
        <p><b>Model:</b> {model}</p>
        <p><b>Color:</b> {color}</p>
        <p><b>Year:</b> {year}</p>
        <p><b>Total-Mileage:</b> {mileage}</p>
        <p><b>Price:</b> {price}</p>
        <button onClick={() => console.log(car_id)}>Contact for this vehicle</button>
      </div>
    </div>
  );
};

export default Car;
