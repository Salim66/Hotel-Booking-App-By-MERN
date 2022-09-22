import express from 'express';


// config express
const app = express();


// llsten server with port
app.listen(8800, () => {
    console.log("Server is successfully connection on port 8800");
})