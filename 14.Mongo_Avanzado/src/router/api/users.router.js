const { Router } = require('express')
const { userModel } = require('../../models/users.model')


const router = Router()



// traer todos los usuarios
router.get('/', async ( req, res ) => {

    const users = await userModel.find({first_name: 'Celia'}).explain('executionsStats')
    
    console.log(users)
    res.send({ status: 'success', payload: users })
})





router.post('/', async ( req, res ) => {
    const { body } = req
    // if(!body.email || !body.password ){
    if( !body.first_name || !body.email ){
       return  res.status(400).send({status: 'error', error: 'falta data'})
    }
    // users.push( { id: users.length + 1, ...body })
    
    const result = await userModel.create(body)

    res.status(200).send({data: result})
})

router.put('/:uid', async ( req, res ) => {
    const { uid } = req.params

    let userToReplace = req.body
    if( !userToReplace.first_name || !userToReplace.email ){
        return  res.status(400).send({status: 'error', error: 'falta data'})
     }

    const result = await userModel.updateOne({_id: uid}, userToReplace)
    res.send({status: 'success', message: 'usuario actualizado'})
})

router.delete('/:uid', async ( req, res ) => {
    const { uid } = req.params
    // const nuevaLista = users.filter(user => user.id !== Number(uid))

    const result = await userModel.deleteOne({_id: uid})
    res.send({status: 'succes', message: 'usuario borrado'})
})

module.exports = router 
