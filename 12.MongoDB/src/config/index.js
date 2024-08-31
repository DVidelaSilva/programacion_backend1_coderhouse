const {connect} = require('mongoose')

module.exports.connectDB = async () => {
    console.log('Base de Datos Conectada');
    return await connect('mongodb+srv://DAVS_CoderHouse_Backend:davs1509@cluster0.wtz9xqt.mongodb.net/comision70125?retryWrites=true&w=majority&appName=Cluster0')
}