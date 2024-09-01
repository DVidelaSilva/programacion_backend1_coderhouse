const { Router } = require('express')
const { ProductManagerMongo } = require('../../daos/mongoDB/productsManager.mongo')

const router = Router()
const productService = new ProductManagerMongo

// GET
router.get('/', async (req, res) => {
    try{
        const products = await productService.getProducts()
        res.send({status: 'success', payload: products})
    
    } catch (error){
        console.log(error);
    }    
})

// GET (id)
router.get('/:pid', async (req, res) => {
    res.send('put de un producto')

})

// POST
router.post('/', async (req, res) => {
    try{
        const { body } = req
        // mas validaciones
        const response = await productService.createProducts(body)
        res.send({status: 'success', payload: response})

    } catch (error){
        console.log(error)
    }
})

router.put('/:pid', async (req, res) => {
    res.send('put de un producto')
})

router.delete('/:pid', async (req, res) => {
    res.send('delete de un producto')
})

module.exports = router