import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    url: String,
    detailURL: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
});

const product = mongoose.model("product", productSchema); // if you dont explicitly specify the connection object... mongoose.model() wil automatically used the default connection created by mongoose.connect()

export default product;