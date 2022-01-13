import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from '../user/ErrorPage/ErrorPage';
import ProfilePage from '../user/ProfilePage/ProfilePage';
import UpdateProfilePage from '../user/UpdateProfilePage/UpdateProfilePage';


const Router = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/Profile"  element={<ProfilePage />}>
                </Route>

                <Route path="/UpdateProfile"  element={<UpdateProfilePage />}>
                </Route>
                
                <Route path="/Error" element={<ErrorPage />}>
                </Route>
            </Routes>
        </BrowserRouter>
    );

};

export default Router;