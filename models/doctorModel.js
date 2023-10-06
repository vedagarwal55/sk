const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({
    userId:{
        type:String,
    },
    firstName:{
        type:String,
        require:[true,'First name is required']
    },
    lastName:{
        type:String,
        require:[true,'Last name is required']
    },
    phone:{
        type:String,
        require:[true,'Phone is required']
    },
    email:{
        type:String,
        require:[true,'Email is required']
    },
    website:{
        type:String,
        
    },
    address:{
        type:String,
        
    },
    specialization:{
        type:String,
        
    },
    experience:{
        type:String,
        
    },
    timeings:{
        type:Object,
        
    }

},{timestamps:true})

const doctorModel = mongoose.model('users',doctorSchema)

module.exports=doctorModel