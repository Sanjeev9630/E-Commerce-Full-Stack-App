import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import morgan from "morgan";
import authRoute from "./routes/authRoute.js";
import cors from 'cors'
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'

// configure env
dotenv.config();

const app = express();

// middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use("/api/v1/auth", authRoute)
app.use("/api/v1/category", categoryRoutes)
app.use("/api/v1/product", productRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to Ecommere App")
})

mongoose.connect('mongodb://127.0.0.1:27017/Ecommerce').then(() => {
    console.log('Connect to db');
}).catch((err) => {
    console.log(err);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})