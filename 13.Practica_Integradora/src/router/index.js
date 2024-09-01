const { Router } = require('express')
const productsRouter = require('./api/products.router')
const cartsRouter = require('./api/carts.router')
const viewRouter = require('./views.router')
const { uploader } = require('../utils/uploader')

const router = Router()

router.post('/', uploader.single('myFile'), (req, res) => {
    res.send('Archido Subido')
})

router.use('/', viewRouter)
router.use('/api/products', productsRouter)
router.use('/api/carts', cartsRouter)


module.exports = router

