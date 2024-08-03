const { Router } = require('express')

const router = Router()

function auth(req, res, next) {
    req.user = {
        name: 'fede',
        role: 'admin'
    }
    if (req.user.role !== 'admin') {
        return res.send('no puede avanzar a partir de aqui')
    }
    next()
}

const users = []

router.get('/', auth, ( peticion, respuesta ) => {

    respuesta.send({data: users})
})

// request obj
// http://localhost:8080/ + /api/users + /
router.post('/', ( peticion, respuesta ) => {
    const { body } = peticion
    if(!body.email || !body.password ){
       return  respuesta.status(400).send({status: 'error', error: 'falta data'})
    }
    users.push( { id: users.length + 1, ...body })
    respuesta.status(200).send({data: users})
})

router.put('/', ( peticion, respuesta ) => {
    
    respuesta.send('put hola mundo')
})

router.delete('/:uid', ( peticion, respuesta ) => {
    const { uid } = peticion.params
    const nuevaLista = users.filter(user => user.id !== Number(uid))
    respuesta.send(nuevaLista)
})
// ['1', '2', '3'] ->  ['1', '2']

// router.get('/api/productos',)


// export default router type module
module.exports = router // common js

// const carts = [
//     {id: 'asdfasdfasd', products: [{},{}]},
//     {id: 'asdfasdfasd', products: []},
//     {id: 'asdfasdfasd', products: []},
//     {id: 'asdfasdfasd', products: []},
//     {id: 'asdfasdfasd', products: []},
//     {id: 'asdfasdfasd', products: []},
// ]