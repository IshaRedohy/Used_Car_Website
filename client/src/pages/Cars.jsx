import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
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
                return (
                    <Link key={key} to={`/${value.car_id}`} className='product-link'>
                        <div key={key} className='product'>
                            <div className='product-details'>
                                <Product data={value}/>
                            </div>
                            <br/>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default Cars;