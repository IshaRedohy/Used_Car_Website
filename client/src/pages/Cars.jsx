import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Product from '../components/Product';
import "./Cars.css"

const Cars = () => {

    const [listOfProducts, setListOfProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/").then((response) => {
            setListOfProducts(response.data);
        });
    }, []);

    return(
        <div className='whole mb-4'>
            <div className='header-div bg-danger'>
                <h1 className='header-text text-center'>Welcome to the largest used car e-commerce site.</h1>
            </div>
            <div className='container-fluid row row-cols-4 products'>
                {listOfProducts.map((value,key) => {
                    return (
                        <Link key={key} to={`/${value.car_id}`} className='col product-link'>
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
        </div>
    );
}

export default Cars;