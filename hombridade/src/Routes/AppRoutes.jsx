import React from 'react';
import {Routes , Route , BrowserRouter, Router } from 'react-router-dom';
import Login from '../screens/Login';
import AboutPage from '../screens/AboutPage';
import HomePage from '../screens/HomePage';

function AppRoutes() {



    return (

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/about" element={<AboutPage/>} />
                </Routes>
            </BrowserRouter>
       
    )
}

export default AppRoutes;