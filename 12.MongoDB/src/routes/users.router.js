const { Router } = require('express')
const { userModel } = require('../models/users.model')

const router = Router()



// GET

router.get('/', async ( req, res ) => {

    const users = await userModel.find()

    res.send({status: 'success', payload: users})
})

// POST

router.post('/', async ( req, res ) => {
    const { body } = req
    if(!body.first_name || !body.email){
       return  res.status(400).send({status: 'error', error: 'falta data'})
    }
    
    const result = await userModel.create(body)

    res.status(200).send({data: result})
})


// PUT

router.put('/:uid', async ( req, res ) => {

    const { uid } = req.params

    let userToReplace = req.body
    if(!userToReplace.first_name || !userToReplace.email){
        return  res.status(400).send({status: 'error', error: 'falta data'})
     }

    const result = await userModel.updateOne({_id: uid}, userToReplace)
    
    res.send({status: 'succes', message: 'Usuario Actualizado'})
})


// DELETE

router.delete('/:uid', async ( req, res ) => {
    const { uid } = req.params
    
    const result = await userModel.deleteOne({_id: uid})

    res.send({status: 'success', message: 'Usuario Eliminado'})
})





module.exports = router 

