const mongoose=require('mongoose')

const usersch=new mongoose.Schema({

uname:{
    type:String,
    
},
fname:{
    type:String,
    
},
email:{
    type:String,
    
},
phone:{
    type:Number,
    
},

date:{
    type:String
},
package:{
    type:String,
    
},

price:{
    type:String,
    
},
des:{
    type:String,
    
}

})

const userdb=mongoose.model("users", usersch)

module.exports=userdb;