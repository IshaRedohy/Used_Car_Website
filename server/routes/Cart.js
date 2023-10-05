const express = require('express');
const mysql = require('mysql2/promise'); // Using promise-based version
const fs = require('fs');
const sharp = require('sharp');
const router = express.Router();

// Create a connection to your database
const connection = mysql.createConnection({
    "host": "127.0.0.1",
    "user": "root",
    "password": "LHD@nelow007",
    "database": "CarsSchema",
});

router.get("/", async (req,res) => {
    // Execute a query to get the BLOB data
    const [rows, fields] = await connection.execute('SELECT model, price, car_images.image_data FROM car_images JOIN usa_cars_datasets ON car_images.car_id = usa_cars_datasets.car_id  WHERE usa_cars_datasets.car_id = 8');

    // Iterate through the rows
    for (let index = 0; index < rows.length; index++) {
    const blobData = rows[index].image_data;

    // Convert BLOB to image
    await sharp(blobData)
        .toFormat('jpeg') // or 'jpeg' based on your preference
        .toFile(`output_${index}.png`)
        .then((info) => {
        console.log(`Image ${index} converted and saved!`);
        })
        .catch((err) => {
        throw err;
        });
    }

    // Don't forget to close the connection when you're done
    await connection.end();
});

module.exports = router;