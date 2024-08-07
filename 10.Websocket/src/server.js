const express       = require('express')
const userRouter    = require('./routes/users.router.js')
const productRouter = require('./routes/products.router.js')
const pruebaRouter = require('./routes/pruebas.router.js')
const viewsRouter = require('./routes/views.router.js')
const logger        = require('morgan')
const { uploader } = require('./utils/multer.js')
const handlebars = require ('express-handlebars')
const { Server } = require('socket.io');


const app = express()
const PORT = 8080
const httpServer = app.listen(PORT, () => {
    console.log('escuchando en el puerto: ', PORT)
})


// Websocket

const socketServer = new Server(httpServer)
socketServer.on('connection', (socket) => {
    console.log('Nuevo cliente conectado')

    socket.on('message', data => {
        console.log(data);
    })

    socket.emit('evento_para_un_socket_individual', 'Este mensaje solo lo debe recibir el socket actual')

    socket.broadcast.emit('evento_para_todos_menos_para_el_socket_actual', 'Este evento lo veran todos los socket conectados menos el socket actual que envio el mensaje')

    socketServer.emit('mensaje_para_todos', 'Este mensaje lo recibiran todos')
})


 // Middlewares

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))
app.use(logger('dev'))


// configuracion del motor de plantillas

app.engine('handlebars', handlebars.engine())
// configurar la carpeta donde debe tomar las plantillas
app.set('views', __dirname + '/views')
// configurar la extension de las plantillas
app.set('view engine', 'handlebars')

// endpoint

app.post('/', uploader.single('myFile'), (req, res)=>{
    res.send('archivo subido')
})
app.use('/', viewsRouter)
app.use('/pruebas', pruebaRouter)
app.use('/api/users', userRouter)
app.use('/api/products', productRouter)

app.use((error, req, res, next) => {
    console.log(error.stack)
    res.status(500).send('error de server')
})

