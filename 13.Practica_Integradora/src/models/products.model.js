const { Schema, model } = require('mongoose')

const collectionName = 'products'

const productSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    code: {
        type: String,
        require: true,
        unique: true
    },
    thumbnail: String,
    price: Number,
    stock: Number,
    category:{
        type: String,
        require: true
    },
    create: {
        type: Date,
        default: Date.now()
    }
})

const productModel = model(collectionName, productSchema)

module.exports = {
    productModel
}