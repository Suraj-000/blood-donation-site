import React from "react";
import { useState,useEffect} from "react";
import Axios from "axios";
import {useNavigate } from "react-router-dom";


const UpdateUser=()=>{
    const [newUserName,setNewUserName]=useState("");
    const [newUserEmail,setNewUserEmail]=useState("");
    const [newUserAge,setNewUserAge]=useState(0);
    const [newUserGender,setNewUserGender]=useState("");
    const [newUserBloodGroup,setNewUserBloodGroup]=useState("");
    const [userPassword,setuserPassword]=useState("");
    const [newPassword,setNewPassword]=useState("");
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
        Axios.get("/users").then((response)=>{
            setAllUsersList(response.data);
        })
    },[]);
    var id=0;
    const updateUser=()=>{
        

        if(newUserName==="" || newUserAge<18 || newUserGender==="" || newUserBloodGroup==="" || userPassword==="" || newPassword===""){
            togglePopup();
        }else{
            for(var i=0;i<allUsersList.length;i++){
                if( allUsersList[i].userPassword===userPassword){
                    id=allUsersList[i]._id;
                }
            }
            if(id===0){
                togglePopup();
            }
            else{
                Axios.put("/users/update",{
                id:id,newUserName:newUserName,newUserEmail:newUserEmail,newUserGender:newUserGender,newUserAge:newUserAge,newUserBloodGroup:newUserBloodGroup,newPassword:newPassword,
            })
            navigate("/DisplayAllUsers");
            }
        }
    }


    return(
        <>
            <div className="update-user">
            <h1>Update your details</h1>
            <label>Update Name:</label>
                <input type="text" onChange={(event)=>{setNewUserName(event.target.value);}}/>
                
                <label>Update Email:</label>
                <input type="Email" onChange={(event)=>{setNewUserEmail(event.target.value);}}/>
                
                <label>Update Age:</label>
                <input type="Number" onChange={(event)=>{setNewUserAge(event.target.value);}}/>
                
                <label>Update Gender:</label>
                <input type="text" onChange={(event)=>{setNewUserGender(event.target.value);}}/>
                
                <label> Update Blood Group:</label>
                <input type="text" onChange={(event)=>{setNewUserBloodGroup(event.target.value);}}/>

                <label>Enter old password:</label>
                <input type="Password" autoComplete="new-password" onChange={(event)=>{setuserPassword(event.target.value);}}></input>

                <label>Enter new password:</label>
                <input type="Password" autoComplete="new-password" onChange={(event)=>{setNewPassword(event.target.value);}}></input>

                <button onClick={updateUser}>Submit</button>
                {userRegistered && <Popup handleClose={togglePopup}/>}
            </div>
        </>
    )
}

export default UpdateUser;