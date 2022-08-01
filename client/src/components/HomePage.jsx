import React from "react";
import { NavLink } from "react-router-dom";
import BloodDonationImg1 from "../images/img1.png";

function HomePage(){
    return(
        <>
        <section>
        <div className="home-page">
        <h1>Welcome to Blood Donation site</h1>
        <h2>Please read the rules and guidlines for blood donation <a href="http://nbtc.naco.gov.in/page/eligibility/">here.</a></h2>
        <div >
            <NavLink className="home-navlink" to="/registerUserPage" activeStyle>Register</NavLink>        
            <NavLink className="home-navlink" to="/LoginPage" activeStyle>Login</NavLink>            
        </div>
            <img src={BloodDonationImg1} alt="blood-donation" />
            </div>
        </section>
        </>
    )
}

export default HomePage;