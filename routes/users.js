const router =require("express").Router();
let  RegisterUserModel=require("../models/Register");

//get
router.route("/").get((req,res)=>{
    RegisterUserModel.find()
    .then((users)=>res.json(users))
    .catch((err)=>res.status(400).json("error "+err));
});

router.route("/read").get((req,res)=>{
    RegisterUserModel.find()
    .then((users)=>res.json(users))
    .catch((err)=>res.status(400).json("error "+err));
});


//Adding user
router.route("/insertuserdata").post((req,res)=>{

    const userName=req.body.userName;
    const userAge=req.body.userAge;
    const userEmail=req.body.userEmail;
    const userGender=req.body.userGender;
    const userBloodGroup=req.body.userBloodGroup;
    const userPassword=req.body.userPassword;

    const userdetails=new RegisterUserModel({userName:userName,userEmail:userEmail,userGender:userGender,userAge:userAge,userBloodGroup:userBloodGroup,userPassword:userPassword});
    userdetails
        .save()
        .then(()=>res.json("suer added"))
        .catch((err)=>res.status(400).json("error "+err));
    })


// search by id
router.route("/:id").get((req,res)=>{
    RegisterUserModel.findById(req.params.id)
    .then((user)=>res.json(user))
    .then((err)=>res.status(400).json("error "+err))
})


// delete

router.route("/delete/:id").delete(async(req,res)=>{
    const id=req.params.id;
    await RegisterUserModel.findByIdAndDelete(id)
    .exec()
    
    
})

// update
router.route("/update").put((req,res)=>{

    const newUserName=req.body.newUserName;
    const newUserAge=req.body.newUserAge;
    const newUserEmail=req.body.newUserEmail;
    const newUserGender=req.body.newUserGender;
    const newUserBloodGroup=req.body.newUserBloodGroup;
    const newPassword=req.body.newPassword;
    const id=req.body.id;


    RegisterUserModel.findById(id)
    .then((updatedUser)=>{
        updatedUser.userName=newUserName;
        updatedUser.userAge=newUserAge;
        updatedUser.userEmail=newUserEmail;
        updatedUser.userGender=newUserGender;
        updatedUser.userBloodGroup=newUserBloodGroup;
        updatedUser.userPassword=newPassword;


        updatedUser
        .save()
        .then(()=>res.json("suer added"))
        .catch((err)=>res.status(400).json("error "+err));
        
    })
    .catch((err)=>res.status(400).json("error "+err));
})






module.exports=router;