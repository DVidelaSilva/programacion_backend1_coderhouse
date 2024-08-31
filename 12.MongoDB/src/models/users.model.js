const {Schema, model} = require('mongoose') 

const userCollection = 'users'

const userSchema = new Schema({
    first_name: {
        type: String,
        require: true
    },
    last_name: String,
    email: {
        type: String,
        require: true,
        unique: true
    }
})

const userModel = model(userCollection, userSchema)

module.exports = {
    userModel
} 