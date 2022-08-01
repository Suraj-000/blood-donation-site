require('dotenv').config();
const express=require('express');
const cors=require('cors');
const path =require('path');

const mongoose=require('mongoose');


const app=express();
const port=process.env.PORT || 3001;

app.use(express.static("public"));
app.use(cors());
app.use(express.json());



const url=process.env.ATLAS_URI;
mongoose.connect(url,{
    useNewUrlParser:true,
    
});


const connection=mongoose.connection;
connection.once("open",()=>{
    console.log("mongoDB database connection established")
})

const user=require( "./routes/users");

app.use("/users",user);

app.route('/*').get(function(req, res) { 
    return res.sendFile(path.join(__dirname, 'public/index.html')); 
 });



app.listen(port, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });