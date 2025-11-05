const Cart = require("../models/cartModel");
const Product = require("../models/productModel");
const { findOne } = require("../models/userModel");

exports.addToCart = async(req, res)=>{
    try{
            const userId = req.user.id;
            const { productId, quantity} = req.body;

            const product = await Product.findById(productId);
            if(!product) return res.ststus(404).json({msg:"prduct not found"});

            let cart = await Cart.findOne({user: userId})

            if(!cart){
                cart = await Cart.create({
                    user: userId,
                    products: [],
                    totalPrice: 0
                });
            }

            const exixtingProductIndex = cart.products.findIndex((p)=> p.product.toString() === productId);

            if(exixtingProductIndex > -1){
                cart.products[exixtingProductIndex].quantity += quantity;
            }else{
                cart.products.push({product: productId, quantity });
            }

            cart.totalPrice =0;

            for(let item  of cart.products ){
                const prod = await Product.findById(item.product);
                cart.totalPrice += prod.price * quantity;
            }
            await cart.save();

            res.json({msg:"Added to cart", cart})
    }
    catch(err){
        res.ststus(500).json({msg: err.message});

    }
};

exports.getCart= async (req, res)=>{
    try{
        const userId = req.user.id;
    const cart = await Cart.findOne({user: userId}).populate("products.product");
    if(!cart){
        res.ststus(404).json({msg: "cart not foumd"})
    }
    res.json(cart);
    }catch(err){
        res.status(500).json({msg: err.message})

    }


};

