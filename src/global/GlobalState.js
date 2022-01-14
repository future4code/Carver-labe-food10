import React, { useState, useEffect } from 'react';
import { GlobalContext } from './GlobalStateContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




export const GlobalState = (props) => {


    const [profile, setProfile] = useState ([])
    // const [updateProfile, setUpdateProfile] = useState ([])
    // const [OrdersHistory, setOrdersHistory] = useState ([])
    const [email, setEmail] = useState({password:'',showPassword:false
    })
    const [password, setPassword] = useState("")

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


    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const onChangePassword = (event) => {
        setPassword({password:event.target.value});
    };
    
    const handleClickShowPassword = () => {
        setPassword({
          ...password,
          showPassword: !password.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    const PostOnSubmitLogin = (item) => {
        // event.preventDefault()
        console.log(item);

        const body = {
            email: item.email,
            password: item.password
        };

        const rappi4D = "rappi4D"

        let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRnQlRsUDhzZVRvR2RYQVprVDNWIiwibmFtZSI6Ikp1bGlhIiwiZW1haWwiOiJqdWxpYS50ZXN0ZUBnbWFpbC5jb20iLCJjcGYiOiI0MjMuMTQzLjY1NC01NiIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBTYW50YSBMdXppYSwgMTg3IC0gVmlsYSBkYXMgUGFkcm9laXJhcyIsImlhdCI6MTY0MjA4NTQ3N30.53WwvO7ns5DgdAM7JamQoD2Bco6G62v8md5i3GaMdNg"


        console.log(body)

        axios
        .post(`https://us-central1-missao-newton.cloudfunctions.net/${rappi4D}/login`, body,{auth:token})
        .then((response) => {
            console.log("essa porra ta rodando", response.data.token);
            localStorage.setItem("token", response.data.token)
            // goToRestaurants()
        })
        .catch((error) => {
            console.log("Não conseguimos:", error.response);
        });

        const navigate = useNavigate();

        const goToRestaurants = () => {
            navigate("/Restaurant");
        }


    }

    // const SingUpName = (event) => {
    //     setSingUpName(event.target.value);
    // };

    // const SingUpEmail = (event) => {
    //     setSingUpEmail(event.target.value);
    // };

    // const SingUpCpf = (event) => {
    //     setSingUpCpf(event.target.value);
    // };

    // const SingUpPassword = (event) => {
    //     setSingUpPassword(event.target.value);
    // };

    const PostOnSubmitSingUp = (item) => {

        // event.preventDefault()
        console.log(item);

        const body = {
            name:item.name,
            email:item.email,
            cpf:item.cpf,
            password: item.password
        };

        console.log(body)

        const rappi4D = "rappi4D"


        axios
        .post(`https://us-central1-missao-newton.cloudfunctions.net/${rappi4D}/login`, body)
        .then((response) => {
            console.log("ss", response.data);
            localStorage.setItem("token", response.data)
            // goToRestaurants()
        })
        .catch((error) => {
            console.log("Não conseguimos:", error.response);
        });

        // const navigate = useNavigate();

        // const goToRestaurants = () => {
        //     navigate("/Restaurant");
        // }
    }

    return(
        <GlobalContext.Provider value={{profile, setProfile, getProfile, email, setEmail, password, setPassword, PostOnSubmitLogin, onChangeEmail, onChangePassword ,handleClickShowPassword, handleMouseDownPassword}}>
            {props.children}
        </GlobalContext.Provider>
    )
    
}