import React from "react";

import {useNavigate } from "react-router-dom";



const UpdateDelete=()=>{
    const navigate=useNavigate();
    const deleteUser=()=>{
        navigate("/DeleteUser");
    }
    const updateUser=()=>{
        navigate("/UpdateUser");
    }

    return(

        <>
        <div className="update-delete">
        
            <label>Update Your Details</label>
            <button onClick={updateUser}>Update</button>

            <label>Delete your account</label>
            <button onClick={deleteUser}>Delete</button>
        </div>
        </>
    )
}

export default UpdateDelete;