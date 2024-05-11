import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: String,
    thumbURL: String,
    detailURL: String,
})

export default model("Product",productSchema);