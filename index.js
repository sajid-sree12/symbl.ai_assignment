const express=require('express')
const app=express()
console.log('kkk')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api',require('./routes/api'))
app.listen(7788,()=>{
    console.log("start at 7788")
})
