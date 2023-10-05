import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Car from '../components/Car';

const Home = () => {

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
                    <div key={key} className='product-container'>
                        <div className="ADD PICTURE HERE">
                            <img src={imagePath} alt={`Car ${key}`}/>
                        </div>
                        <div className='product-details'>
                            <Car data={value}/>
                        </div>
                        <br/>
                    </div>
                );
            })}
        </div>
    );
}

export default Home;