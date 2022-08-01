

import React from "react";


import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "./App.css";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import RegisterUser from "./components/registerUserPage";
import LoginPage from "./components/LoginPage";
import Contact from "./components/Contact";
import DisplayAllUsers from "./components/DisplayAllUsers";
import Footer from "./components/Footer";
import DeleteUser from "./components/DeleteUser";
import UpdateUser from "./components/UpdateUser";



function App(){
    return(
        <>        
            <Router >
            <Navbar/>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/registerUserPage' element={<RegisterUser/>} />
                <Route path='/LoginPage' element={<LoginPage/>} />
                <Route path='/Contact' element={<Contact/>} />
                <Route path='/DisplayAllUsers' element={<DisplayAllUsers />} />
                <Route path='/DeleteUser' element={<DeleteUser />} />
                <Route path='/UpdateUser' element={<UpdateUser />} />
            </Routes>
            </Router>
            <Footer/>
        </>
    )
}

export default App;