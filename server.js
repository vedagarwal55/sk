
const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

//.env
dotenv.config();

//mongodb connection
connectDB();

// rest object

const app = express();

//middlewares

app.use(express.json());
app.use(morgan('dev'));

//routes

app.use("/api/v1/user",require("./routes/userRoutes"));

// port

const port = process.env.PORT || 8080;
//listen
app.listen(port,() =>{
    console.log(`server running in ${process.env.NODE_MODE} Mod on port ${process.env.PORT}`.bgCyan.white);
});