import React from "react";
import { useState,useEffect} from "react";
import Axios from "axios";
import {useNavigate } from "react-router-dom";

const LoginPage=()=>{
    const [userEmail,setuserEmail]=useState("");
    const [userPassword,setuserPassword]=useState("");
    const [allUsersList,setAllUsersList]=useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const navigate=useNavigate();

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    useEffect(()=>{
        Axios.get("/users/read").then((response)=>{
            setAllUsersList(response.data);
        })
    },[])
    const Popup = props=> {
        return (
                <>
                    <h1>User not found.</h1>
                    <button onClick={props.handleClose} >Ok</button>
                </>
            );
        };

    var check=false;
    const verifyUser=()=>{
        for(var i=0;i<allUsersList.length;i++){
            if(allUsersList[i].userEmail===userEmail && allUsersList[i].userPassword===userPassword){
                check=true;
            }
        }
        if(check===false){
            togglePopup();
        }
        else{
            navigate("/DisplayAllUsers");
        }
    }

    return(
        <>
            <div className="LoginPage">
                <h1>Login Page</h1>
                <label>Email:</label>
                <input type="email" name="from_email" placeHolder="email"  onFocus="this.value=''" autoComplete="false" onChange={(event)=>{setuserEmail(event.target.value);}}></input>
                <label>Password:</label>
                <input type="Password"  name="from_email" placeHolder="password"  onFocus="this.value=''" autoComplete="new-password" onChange={(event)=>{setuserPassword(event.target.value);}}></input>
                <button onClick={verifyUser} >Login</button>
                {isOpen && <Popup handleClose={togglePopup}/>}
            </div>
        </>
    )
}
export default LoginPage;