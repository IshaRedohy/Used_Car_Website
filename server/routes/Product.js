const express = require('express');
const mysql = require("mysql2");
const router = express.Router();
require('dotenv').config();

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

router.get("/:car_id", async (req,res) => {
    const car_id = req.params.car_id;
    const query =  `SELECT car_id, price, brand, model, year, mileage, color FROM usa_cars_datasets WHERE car_id=${car_id}`;
    try {
        const results = await db.query(query);
        res.json(results);
    } catch (err) {
        res.status(404).json({ error: 'Product not found' });
    }
});

module.exports = router;