const express = require('express');
const mysql = require("mysql2");
const router = express.Router();
require('dotenv').config();
const fs = require('fs');
const sharp = require('sharp');
const path = require('path');

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbDatabase = process.env.DB_DATABASE;

// Configure your MySQL connection
const db = mysql.createConnection({
    "host": dbHost,
    "user": dbUser,
    "password": dbPassword,
    "database": dbDatabase,
});

// Connect to MySQL
db.connect();

// Specify the folder where you want to save the images
const imageFolder = 'images';

// Create the folder if it doesn't exist
const imagePath = path.join(__dirname, imageFolder);

if (!fs.existsSync(imagePath)) {
    fs.mkdirSync(imagePath);
  }

// Serve static files from the "images" folder
router.use('/images', express.static(imagePath));

router.get("/", (req,res) => {
    const query_convert =  "SELECT car_images.image_data FROM car_images JOIN usa_cars_datasets ON car_images.car_id = usa_cars_datasets.car_id LIMIT 211";
    const query = "SELECT car_id, price, brand, model, year, mileage, color FROM usa_cars_datasets LIMIT 211";
    db.query(query_convert, (err, results) => {
        if (err) throw err;

        // return res.json(results);
        results.forEach((data,index) => {
            // Convert BLOB data to a buffer
            const buffer = Buffer.from(data.image_data, 'binary');

            sharp(buffer)
            .jpeg()
            .toFile(`${imagePath}/image_${index}.jpeg`, (err, info) => {
            if (err) {
                throw err;
            }
            });
        });

        db.query(query, (err, data) => {
            if (err) throw err;
            return res.json(data);
        });
    });
}); 

module.exports = router;