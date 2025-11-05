const express = require("express");
const { auth } = require("../middleware/authMiddleware");
const {addToCart, getCart} = require("../controllers/cartController")
const router = express.Router();

router.post("/add", auth, addToCart);
router.get("/view", auth, getCart);


module.exports= router;