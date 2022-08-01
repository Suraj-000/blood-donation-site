import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component{

    render(){
        return (
            <>
        <nav>
            <div className="navbar" >
                <Link className="navlink" to="/" activeStyle>Home</Link>
                <Link className="navlink" to="/registerUserPage" activeStyle>Register</Link>        
                <Link className="navlink" to="/LoginPage" activeStyle>Login</Link>        
                <Link className="navlink" to="/Contact" activeStyle>Contact</Link>        
            </div>
        </nav>
        </>
    );
}
};
