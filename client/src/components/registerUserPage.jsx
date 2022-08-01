import React, { useState } from "react";
import Axios from 'axios';
import "../App.css";
import {useNavigate} from "react-router-dom";
import img2 from "../images/img2.png";

function RegisterUser(){

    const [userName,setuserName]=useState("");
    const [userEmail,setuserEmail]=useState("");
    const [userAge,setuserAge]=useState(0);
    const [userGender,setuserGender]=useState("");
    const [userBloodGroup,setuserBloodGroup]=useState("");
    const [userPassword,setuserPassword]=useState("");
    const [userRegistered,setUserRegistered]=useState(false);
    const navigate=useNavigate();

    const togglePopup=()=>{
        setUserRegistered(!userRegistered);
    }

    const Popup=props=>{
        return(
            <>
                <h1>Enter details properly.</h1>
                <button onClick={props.handleClose}>Ok</button>
            </>
        )
    }

    const saveDetails=()=>{    
        if(userName==="" || userAge<18 || userGender==="" || userBloodGroup==="" || userPassword===""){
            togglePopup();
        }else{
            Axios.post("/users/insertuserdata",{
            userName:userName,
            userEmail:userEmail,
            userAge:userAge,
            userGender:userGender,
            userBloodGroup:userBloodGroup,
            userPassword:userPassword,
        });
            navigate("/DisplayAllUsers");
        }
    }
    return(
        <section className="registerPage">
        <div className="register-menu">
            <h1>Register page</h1>
                <label>Name:</label>
                <input type="text" onChange={(event)=>{setuserName(event.target.value);}}/>

                <label>Email:</label>
                <input type="Email" onChange={(event)=>{setuserEmail(event.target.value);}}/>
                
                <label>Age:</label>
                <input type="Number" onChange={(event)=>{setuserAge(event.target.value);}}/>
                
                <label>Gender:</label>
                <input type="text" onChange={(event)=>{setuserGender(event.target.value);}}/>
                
                <label>Blood Group:</label>
                <input type="text" onChange={(event)=>{setuserBloodGroup(event.target.value);}}/>
                
                <label>Set Password:</label>
                <input type="Password" autoComplete="new-password" onChange={(event)=>{setuserPassword(event.target.value);}}></input>

                <button onClick={saveDetails}>Create Account</button>
                {userRegistered && <Popup handleClose={togglePopup}/>}
        </div>
        <div className="register-img">
            <img src={img2} alt="cool"></img>
        </div>

        </section>

    )
}

export default RegisterUser;