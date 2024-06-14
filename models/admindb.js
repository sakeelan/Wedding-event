const mongoose=require('mongoose')

const adminsch=new mongoose.Schema({

name:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},
phone:{
    type:Number,
  
},
address:{
    type:String,
    
}



})

const admindb=mongoose.model("admin", adminsch)

module.exports=admindb;