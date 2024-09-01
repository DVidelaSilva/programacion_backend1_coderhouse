const express = require('express')
const appRouter = require('./router/index')
const { connectDB } = require('./config/index')
const handlebars = require('express-handlebars')

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname  + 'public'))

// BD Mongo
connectDB()

//Motor de Plantillas
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

//Rutas
app.use(appRouter)


app.listen(PORT, err => {
    if(err){
        console.log(err);
    } else {
        console.log(`Servidor escuchando en el puerto ${PORT}`);
    }
})