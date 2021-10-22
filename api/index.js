const express=require('express');
const app=express();
require('dotenv').config();
const PORT=process.env.PORT || 5000
const connectDB=require('./config/connection');
const authRoute=require('./routes/auth');
const booksRoute=require('./routes/books');
connectDB();
app.use(express.json());
app.use('/api/auth',authRoute);
app.use('/api/books',booksRoute);
app.listen(PORT,()=>{
    console.log(`listening on port no ${PORT}`);
})