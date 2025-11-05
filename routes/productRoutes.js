const express = require("express");
const { getProduct, getProductByID, createProduct, updateProduct, deleteProduct } = require("../controllers/productController");
const { auth, adminOnly } = require("../middleware/authMiddleware");



const router = express.Router();

router.get("/",getProduct);
router.get("/:id",getProductByID);
router.post("/add", auth, adminOnly, createProduct);
router.put("/:id", auth, adminOnly, updateProduct);
router.delete("/:id",auth, adminOnly, deleteProduct);

module.exports = router;