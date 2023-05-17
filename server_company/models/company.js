var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:[true,"user email already Register"]
    },
    
    address:{
        type:String
    },
   
    person:[ { 
        type: mongoose.Schema.Types.ObjectId,
         ref: 'Person',
             
    }]
          
    
  
    
})
var Company = new mongoose.model("Company",UserSchema);
module.exports = Company;