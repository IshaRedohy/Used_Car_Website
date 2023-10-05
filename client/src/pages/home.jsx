import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';


function Home() {

    const [listOfProducts, setListOfProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/").then((response) => {
            setListOfProducts(response.data);
        });
    }, []);

    return(
        <div>
            {listOfProducts.map((value,key) => {
                const imagePath = `http://localhost:3001/images/image_${key}.jpeg`;

                return (
                    <div key={key}>
                        <div className="ADD PICTURE HERE">
                            <img src={imagePath} alt={`Car ${key}`}/>
                        </div>
                        <div>{value.model}</div>
                        <div>{value.price}</div>
                        <div>{value.year}</div>
                        <br/>
                    </div>
                );
            })}
        </div>
    );
}

export default Home;