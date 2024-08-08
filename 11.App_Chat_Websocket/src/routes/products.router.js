const { Router } = require('express')
// import { Router }  from 'express'

const router = Router()

// configuración

router.get('/', (req, res)=>{
    res.send('get productos')
})


module.exports = router
// export default router
// export router