// placing order using COD

import ordermodel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

const placeOrder = async (req, res)=>{

    try {
        const {userId, items, amount, address} = req.body;

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: 'COD',
            payment: false,
            date: Date.now()
        }

        const newOrder = new ordermodel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({success:true, message:"order placed"})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }

}

// placing oreder using stripe
const placeOrderStripe = async (req, res)=>{
    
}


//placing oreder using Razorpay 
const placeOrderRazorpay = async (req, res)=>{
    
}

// all orders data for admin
const allOrders = async (req, res)=>{
    try {
        
        const orders = await ordermodel.find({})
        res.json({success:true, orders})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
}


// user data for frontend
const userOrder = async (req, res)=>{
    try {
        
        const {userId} = req.body;

        const orders = await ordermodel.find({userId})
        res.json({success:true, orders})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
        
    }
}


//update order status from admin pannel
const updateStatus = async (req, res)=>{
    try {
        
        const {orderId, status} = req.body
        await ordermodel.findByIdAndUpdate(orderId, {status})
        res.json({success:true, message:"Status updated"})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
        
    }
}

export {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrder, updateStatus}