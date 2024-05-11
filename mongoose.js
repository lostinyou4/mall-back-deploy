import mongoose from "mongoose";
import connect from "./config/connect.js";
import Product from "./models/product_schema.js"

connect();

const productInserted = await Product.create({
    name : 'CAP M SATIN_CREAM MINT',
    price : 49000,
    category : '액세서리',
    thumbURL: '/product/thumb_acc01.jpg',
    detailURL: '/detail/detaul_acc01.jpg'
})

console.log(productInserted)