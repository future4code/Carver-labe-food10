import React, { useState, useEffect } from 'react';
import { GlobalContext } from './GlobalStateContext';
import axios from 'axios';




export const GlobalState = (props) => {

    const [profile, setProfile] = useState ([])
    // const [updateProfile, setUpdateProfile] = useState ([])
    // const [OrdersHistory, setOrdersHistory] = useState ([])

    const getProfile = () => {
       
        const rappi4D = "rappi4D"

        let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRnQlRsUDhzZVRvR2RYQVprVDNWIiwibmFtZSI6Ikp1bGlhIiwiZW1haWwiOiJqdWxpYS50ZXN0ZUBnbWFpbC5jb20iLCJjcGYiOiI0MjMuMTQzLjY1NC01NiIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBTYW50YSBMdXppYSwgMTg3IC0gVmlsYSBkYXMgUGFkcm9laXJhcyIsImlhdCI6MTY0MjAxNTUwN30._In13pNVU_kuYYQBpkVkd2kmvnNIW2_ere43sT9Hq-0"

        axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/${rappi4D}/profile`, {
            header: {
                Auth:token
            }
        })
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err);
        });
    };

    return(
        <GlobalContext.Provider value={{profile, setProfile, getProfile}}>
            {props.children}
        </GlobalContext.Provider>
    )

    const rappi4D = "rappi4D"
}