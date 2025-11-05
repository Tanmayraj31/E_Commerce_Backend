const Product = require("../models/productModel");
const { findOne } = require("../models/userModel");
//const { find, findByIdAndUpdate, findByIdAndDelete } = require("../models/userModel");

exports.createProduct = async(req, res)=>{
   try{
     const {name, description,price,stock} = req.body;
    const exixtingProduct = await Product.findOne({name: name.trim()});
    if(exixtingProduct){
        return res.status(400).json({
            msg:"Product already exixt. update the quantity instead",
            product: exixtingProduct
        })
    }
    const product = await Product.create({name, description, price, stock});

    res.json({msg:"Product created succesfully"});
   }
   catch(err){
    if(err.code === 11000){
        return res.status(400).json({
            msg:"Product exixt"
        })
    }
   }
    res.status(500).json({
        msg:"Internal server error"
    })
};

exports.getProduct = async(req, res)=>{
    const products = await Product.find();
    res.json(products);
}

exports.getProductByID = async (req, res)=>{

    const product = await Product.findById(req.params.id);
    res.json(product);
}

exports.updateProduct = async(req, res)=>{
    const product =  await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json({
        msg:"updated", product
    })
}

exports.deleteProduct = async (req,res)=>{
    const product = await Product.findByIdAndDelete(req.params.id);
    res.json({
        msg:"Deleted"
    })
}