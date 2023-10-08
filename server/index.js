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





















// import React, { useState, useEffect } from 'react';

// const YourComponent = () => {
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(`/api/data?page=${page}&pageSize=10`);
//       const result = await response.json();
//       setData(result);
//     };

//     fetchData();
//   }, [page]);

//   return (
//     <div>
//       {/* Display your data */}
//       {data.map(item => (
//         <div key={item.id}>{/* Render your data here */}</div>
//       ))}

//       {/* Add pagination controls */}
//       <button onClick={() => setPage(prevPage => prevPage - 1)} disabled={page === 1}>
//         Previous Page
//       </button>
//       <button onClick={() => setPage(prevPage => prevPage + 1)}>Next Page</button>
//     </div>
//   );
// };

// export default YourComponent;
