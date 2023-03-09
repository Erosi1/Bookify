const express=require('express');
const morgan=require('morgan');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const User=require('./models/user')
const cors=require('cors');
dotenv.config();

 

const app= express()
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DATABASE,
err => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to the database");
    }
});
//MIDDLEWARE
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//require apis
const productRoutes=require('./routes/product');
const categoryRoutes=require('./routes/category');
const ownerRoutes=require('./routes/owner');
const userRoutes=require('./routes/auth');
const reviewRoutes=require('./routes/review');
const addressRoutes=require('./routes/address');
const paymentRoutes=require('./routes/payment');
const ordersRoutes=require('./routes/order');
app.use("/api",productRoutes);
app.use("/api",categoryRoutes);
app.use("/api",ownerRoutes);
app.use("/api",userRoutes);
app.use("/api",reviewRoutes);
app.use("/api",addressRoutes);
app.use("/api",paymentRoutes);
app.use("/api",ordersRoutes);


app.listen(4000,(err)=>{
    if(err){
        console.log(err);
    }
    else {
        console.log("Listening on port",4000);
    }
})
