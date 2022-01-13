import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassworld] = useState("")

    const navigate = useNavigate();

    const goToRestaurants = () => {
        navigate("/Restaurants");
    }

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const onChangePassword = (event) => {
        setPassworld(event.target.value);
    };

    const onSubmitLogin = (event) => {
        event.preventDefault()
        console.log(email, password);

        const body = {
            email: email,
            password: password
        };

        console.log(body)

        axios
        .post(`https://us-central1-missao-newton.cloudfunctions.net/{{appName}}/login`)
    }
}

export default LoginPage; 