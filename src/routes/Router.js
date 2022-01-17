import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import  LoginPage  from '../user/LoginPage/LoginPage';
import RestaurantsList from '../user/RestaurantsList/RestaurantsList';
import ProfilePage from '../user/ProfilePage/ProfilePage';
import UpdateProfilePage from '../user/UpdateProfilePage/UpdateProfilePage';
import ErrorPage from '../user/ErrorPage/ErrorPage';
import AddAdressPage from '../user/AddAdressPage/AddAdressPage';


const Router = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/Login"  element={<LoginPage />}>
                </Route>

                <Route path="/Profile"  element={<ProfilePage />}>
                </Route>

                <Route path="/AddAdress"  element={<AddAdressPage />}>
                </Route>

                <Route path="/UpdateProfile"  element={<UpdateProfilePage />}>
                </Route>
                
                <Route path="/Error" element={<ErrorPage />}>
                </Route>

                <Route path="/Restaurant" element={<RestaurantsList/>}>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;