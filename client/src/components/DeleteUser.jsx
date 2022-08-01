import React from "react";
import { useState,useEffect} from "react";
import Axios from "axios";
import {useNavigate } from "react-router-dom";

const DeleteUser=()=>{
    const [userPassword,setUserPassword]=useState("");
    const [allUsersList,setAllUsersList]=useState([]);
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
    useEffect(()=>{
        Axios.get("/users/read").then((response)=>{
            setAllUsersList(response.data);
        })
    },[]);

    var id=0;
    const deleteUser=(userPassword)=>{
        if(userPassword===""){
            togglePopup();
        }
        else{
            for(var i=0;i<allUsersList.length;i++){
                if( allUsersList[i].userPassword===userPassword){
                    id=allUsersList[i]._id;
                }
            }
            if(id===0){
                togglePopup();
            }
            else{
                Axios.delete(`/users/delete/${id}`);
                navigate("/");
            }
        }
    }
    return(
        <>
            <h1>To delete your account enter your password.</h1>
            <label>Password:</label>
            <input type="text" onChange={(event)=>{
            setUserPassword(event.target.value);}} />
            <button onClick={()=>deleteUser(userPassword)}>Submit</button>
            {userRegistered && <Popup handleClose={togglePopup}/>}
        </>
    )
}
export default DeleteUser;