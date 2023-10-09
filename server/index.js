const express = require("express");
const app = express();
const port = 3001;
const cors = require('cors');
 
app.use(cors());

const productsRouter = require("./routes/Products");
app.use("/", productsRouter);
app.use("/:car_id", productsRouter);

app.listen(port, () => {
    console.log(`Server running in port ${port}`);
});