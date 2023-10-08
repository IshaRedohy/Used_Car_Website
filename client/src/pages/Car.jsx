import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Car = () => {
  const { car_id } = useParams();
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    // Make an API call to fetch product details based on productId
    axios.get(`http://localhost:3001/${car_id}`).then((response) => {
      setProductDetails(response.data);
    }).catch((error) => {
      console.error('Error fetching data:', error);
  });
  }, [car_id]);

  const { brand, model, price } = productDetails;

  return (
    <div>
      <h2>Product Details</h2>
      <div>
        {/* {console.log(car_id)} */}
        <p>Brand: {brand}</p>
        <p>Model: {model}</p>
        <p>Price: {price}</p>
      </div>
    </div>
  );
};

export default Car;
