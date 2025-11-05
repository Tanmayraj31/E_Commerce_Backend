const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes")
const bodyParser = require("body-parser");


dotenv.config();

const app = express();
app.use(express.json());
app.use(bodyParser.json());
connectDB();

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes );



const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})
