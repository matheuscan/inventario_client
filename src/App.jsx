import React from "react";
import Navigation from './components/Navbar.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";

function App(){
    return (
        <>
            <Navigation></Navigation>

            <Router>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/contacto" element={<Contact></Contact>}></Route>
                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route path="/signup" element={<Signup></Signup>}></Route>
                </Routes>
            </Router>
            <Footer></Footer>
            <script src="./helpers/buttonBack.js"></script>
        </>

    )
}

export default App