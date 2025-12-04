const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({

    userId: {   
        type: mongoose.Schema.ObjectId,
        ref: "User",
    },
    orderId : {
        type: String,
        required: true, 
        unique: true,
    },
    productsId: {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
    },
    product_details: {
        type: Object,
        image: Array,
    },
    paymentId: {
        type: String,
        default: "",
    },
    payment_status: {
        type: String,   
        default : ""
    },
    delivery_address: {
        type: mongoose.Schema.ObjectId,
        ref:  "address",
    },
    subTotalAmt:{
        type: Number,
        default: 0,
    },
    totalAmt:{
        type: Number,
        default: 0,
    },

}, { timestamps: true })

const Order = mongoose.model("order", orderSchema);
module.exports = Order;