import React, { useState, useEffect } from 'react';
import { GlobalContext } from './GlobalStateContext';
import axios from 'axios';


export const GlobalState = (props) => {

    const [profile, setProfile] = useState ([])
    const [updateProfile, setUpdateProfile] = useState ([])
    const [OrdersHistory, setOrdersHistory] = useState ([])

    const getProfile = () => {
       
        
    }
}