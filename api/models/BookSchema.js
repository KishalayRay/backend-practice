const mongoose = require("mongoose");
const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {    
      type: String,
      required: true,
    },
    category:{
      type: Array,
      required: true,
    },
    edition: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
    },
    price: {
      type: Number,
      required:true
    },
    description: {
      type: String,
      required:true
    },
    condition:{
        type: Array,
        required: true,   
    },
    location: {
      type: String,
      required:true
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("book", BookSchema);
