
const { Router } = require ('express')

const router = Router()


router.get('/', (req, res) => {
    res.render('index', {
        name: 'DAVS',
        title: 'Home - Ecomerce'
    })
})



module.exports = router