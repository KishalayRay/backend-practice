const mongoose=require('mongoose');
require('dotenv').config();
const connectDB=async()=>{
    try{
      const conn=await mongoose.connect(process.env.DATABASE_LOCAL,{
    
      })
      console.log(`connection successfull ${conn.connection.host}`)
    }catch(e){
        console.log(e.message);
        process.exit(1);
    }
}
module.exports=connectDB;