const { Schema, model } = require('mongoose')

const userCollection = 'users'

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true,
        index: true
    },
    last_name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: String
})

const userModel = model(userCollection, userSchema)

module.exports = {
    userModel
} 