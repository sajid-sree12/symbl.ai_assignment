const  app=require('express')

const router=app.Router()
/*router.get('/user',(req,res,next)=>{
    res.send("lkhj")
    next()
})*/

router.use('/users',require('./users'))
module.exports=router 
