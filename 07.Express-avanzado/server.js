const express  = require('express')
// import express from 'express'

const app = express()
const PORT = 8080

// para procesar los json del cliente
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// users - crud
// productos
// session
// carrito
// mensajes
// tickets

// get http://localhost:8080 /saludo 

const users = []

app.get('/api/usersr', ( peticion, respuesta ) => {

    respuesta.send({data: users})
})

// request obj
app.post('/api/users', ( peticion, respuesta ) => {
    const { body } = peticion
    if(!body.email || !body.password ){
       return  respuesta.status(400).send({status: 'error', error: 'falta data'})
    }
    users.push( { id: users.length + 1, ...body })
    respuesta.status(200).send({data: users})
})

app.put('/api/users', ( peticion, respuesta ) => {
    
    respuesta.send('put hola mundo')
})

app.delete('/api/users/:uid', ( peticion, respuesta ) => {
    const { uid } = peticion.params
    const nuevaLista = users.filter(user => user.id !== Number(uid))
    respuesta.send(nuevaLista)
})
// ['1', '2', '3'] ->  ['1', '2']

// app.get('/api/productos',)

app.listen(PORT, () => {
    console.log('escuchando en el puerto: ', PORT)
})