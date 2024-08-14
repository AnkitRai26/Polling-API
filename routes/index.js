const express=require('express')
const Router=express.Router()

// this is the entry point of all the api named url's
Router.get('/',(req,res)=>{
    return res.status(200).json({
        message:'Success!',
        des:{
            des:'This Is Polling APi Home Page'
        }
    })
})
Router.use('/api',require('./api/index'));

module.exports=Router