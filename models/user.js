import mongoose from "mongoose";


const userSchema=new mongoose.Schema({
    name:{type:String , trim:true , required:true},
    email: { 
        type:String , trim:true , required:true, unique:true,
    },
    cf_username:{type:String , trim:true , required:true},
    password:{type:String , trim:true , required:true},
    join:{type: Date,default:Date.now}
})

const userModel=mongoose.model('user',userSchema)

export default userModel