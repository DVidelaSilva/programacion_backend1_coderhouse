
const { Router } = require ('express')

const router = Router()

const users = [
    {id: '1', full_name: 'user example 1', email: 'user1@email.com'},
    {id: '2', full_name: 'user example 2', email: 'user2@email.com'},
    {id: '3', full_name: 'user example 3', email: 'user3@email.com'},
]

router.get('/', (req, res) => {

    const userLogin = {
        full_name: 'DAVS',
        role: 'admin'
    }


    res.render('index', {
        user: userLogin,
        isAdmin: userLogin.role === 'admin',
        users,
        title: 'HOME - Ecomerce'
    })
})



module.exports = router