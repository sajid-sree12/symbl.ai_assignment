const  app=require('express')

const router=app.Router()



router.get('/v1/conversations/insights',(req,res,next)=>{
    res.json({"vac":78})
    next()
})
module.exports=router