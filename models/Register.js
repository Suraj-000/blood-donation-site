const mongoose=require('mongoose')


const registerSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true,
    },
    userEmail:{
        type:String,
        required:true,
    },
    userAge:{
        type:Number,
        required:true,
    },
    userGender:{
        type:String,
        required:true,
    },
    userBloodGroup:{
        type:String,
        required:true,
    },
    userPassword:{
        type:String,
        required:true,
    },
});

const RegisterUser=mongoose.model("RegisterUser",registerSchema);
module.exports=RegisterUser;