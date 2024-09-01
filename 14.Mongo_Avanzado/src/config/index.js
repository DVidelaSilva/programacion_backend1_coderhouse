const { connect } = require('mongoose')

const connectDB = async () => {
    console.log('Base de Datos Conectada')
    await connect('mongodb://127.0.0.1:27017/c70125')
}

module.exports = {
    connectDB
}