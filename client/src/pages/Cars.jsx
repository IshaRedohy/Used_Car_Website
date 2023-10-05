import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Product from '../components/Product';

const Cars = () => {

    const [listOfProducts, setListOfProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/").then((response) => {
            setListOfProducts(response.data);
        });
    }, []);

    return(
        <div className='products'>
            {listOfProducts.map((value,key) => {
                const imagePath = `http://localhost:3001/images/image_${key}.jpeg`;

                return (
                    <div key={key} className='product'>
                        <div className="ADD PICTURE HERE">
                            <img src={imagePath} alt={`Car ${key}`}/>
                        </div>
                        <div className='product-details'>
                            <Product data={value}/>
                        </div>
                        <br/>
                    </div>
                );
            })}
        </div>
    );
}

export default Cars;