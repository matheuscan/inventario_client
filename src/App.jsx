import React from "react";
import Navigation from './components/Navbar.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";

function App(){
    return (
        <>
            <Navigation></Navigation>

            <Router>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/contacto" element={<Contact></Contact>}></Route>
                </Routes>
            </Router>
        </>

    )
}

export default App