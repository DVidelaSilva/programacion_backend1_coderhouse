import express from 'express'

const app = express()

app.get('/saludo', (req, res) => {
    res.send("Hola a todos, por ahora desde Express JS!!")
});

app.listen(8080,() => console.log("Servidor arriba en el puerto 8080"))