import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Car.css'

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
    <div className='container-fluid row ImagePage'>
      <div className='ImageContainer col'>
        <img src={carImage} alt='' className='BigImage'/>
      </div>
      <div className='col-4'>
      <h1 className='text-start'>Product Details</h1>
        <p className='text-start'><b>Brand:</b> {brand}</p>
        <p className='text-start'><b>Model:</b> {model}</p>
        <p className='text-start'><b>Color:</b> {color}</p>
        <p className='text-start'><b>Year:</b> {year}</p>
        <p className='text-start'><b>Total-Mileage:</b> {mileage}</p>
        <p className='text-start'><b>Price:</b> {price}</p>
        <button onClick={() => alert(`Thank you for your interest. Our agent will contact you shortly for the ${brand} ${year} ${model}`)} className='btn btn-danger text-end'>Contact for this vehicle</button>
      </div>
    </div>
  );
};

export default Car;
