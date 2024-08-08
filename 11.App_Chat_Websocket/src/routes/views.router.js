const { Router } = require ('express')

const router = Router()

router.use('/', (req, res) => {

    res.render('chat', { 
        isMenu: true
    })
})

const users = [
    {id: '1', full_name: 'user example 1', email: 'user1@email.com'},
    {id: '2', full_name: 'user example 2', email: 'user2@email.com'},
    {id: '3', full_name: 'user example 3', email: 'user3@email.com'},
]

router.get('/users', (req, res) => {

    const userLogin = {
        full_name: 'DAVS',
        role: 'admin'
    }


    res.render('users', {
        user: userLogin,
        isAdmin: userLogin.role === 'admin',
        users,
        title: 'HOME - Ecomerce',
        styles: 'styles.css'
    })
})



module.exports = router