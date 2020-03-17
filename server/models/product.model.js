const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    
    title: { 
        type: String,
        required: [true, "Title is required"],
        minlength: [2, "title must be at least 2 characters"]
        
    },

    price: { 
        type: Number,
        required: [true, "Price is required"],
    },
    description: { 
        type: String,
        required: [true, "Description is required"],
        minlength: [3, "Description must be at least 3 characters"]
    },
}, {timestamps: true});

module.exports = mongoose.model('Product', ProductSchema);

/**
 * module.exports = mongoose.model("Product", ProductSchema)
 * 
 */