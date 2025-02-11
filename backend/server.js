import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
import contactRouter from './routes/contactRoute.js';

// app config
const app = express();
const port = 4000 || process.env.PORT ;
connectDB();
connectCloudinary();

// middleware
app.use(express.json())
app.use(cors());

// api endpoint
app.use('/api/user', userRouter)

app.use('/api/product', productRouter)

app.use('/api/cart', cartRouter)

app.use('/api/order', orderRouter)

// middleware contact


app.use("/api/contact", contactRouter);


app.get('/', (req, res) => {
    res.send("Api work")
});

app.listen(port, () => console.log("server on: " + port))
