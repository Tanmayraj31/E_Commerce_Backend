const mongoose = require("mongoose");
const { required, trim } = require("zod/mini");

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: String,
    price: Number,
    stock: Number
})

module.exports = mongoose.model("Product", productSchema)