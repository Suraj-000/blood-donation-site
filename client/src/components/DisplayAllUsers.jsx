import React, { useEffect, useState } from "react";
import Axios from "axios";
import UpdateDelete from "./UpdateDelete";

const DisplayAllUsers=()=>{
    const [allUsersList,setAllUsersList]=useState([]);
    useEffect(()=>{
        Axios.get("/users/read").then((response)=>{
            setAllUsersList(response.data);
        })
    },[])

    return(
        <>
        <div className="all-users">
            <h1>All Users</h1>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Blood Group</th>
                </tr>
            {
                allUsersList.map((val,key)=>{
                    return(
                        <tr>    
                        <td>{val.userName} </td>
                        <td> {val.userEmail}</td>
                        <td>  {val.userAge}</td>
                        <td>{val.userBloodGroup} </td>
                        </tr>
                    )
                })
            }
            </table>
        </div>
            <UpdateDelete />
        </>
    )
}
export default DisplayAllUsers;