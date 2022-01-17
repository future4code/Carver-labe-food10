import React, { useState, useEffect } from 'react';
import { GlobalContext } from './GlobalStateContext';
import axios from 'axios';





export const GlobalState = (props) => {
    
    const [profile, setProfile] = useState ([])
    // const [updateProfile, setUpdateProfile] = useState ([])
    // const [OrdersHistory, setOrdersHistory] = useState ([])
    const [token, setToken] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [street, setStreet] = useState("")
    const [number, setNumber] = useState("")
    const [neighbourhood, setNeighbourhood] = useState("")
    const [ city, setCity] = useState("")
    const [ state, setState] = useState("")
    const [complement, setComplement] = useState("")

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
        setPassword(event.target.value);
    };

    const onChangeStreet = (event) => {
        setStreet(event.target.value);
    };

    const onChangeNumber = (event) => {
        setNumber(event.target.value);
    };

    const onChangeNeighbourhood = (event) => {
        setNeighbourhood(event.target.value);
    };

    const onChangeCity = (event) => {
        setCity(event.target.value);
    };

    const onChangeState= (event) => {
        setState(event.target.value);
    };

    const onChangeComplement = (event) => {
        setComplement(event.target.value);
    };

    

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
        <GlobalContext.Provider value={{profile, setProfile, getProfile, email, setEmail, password, setPassword,
         token, setToken, onChangeEmail, onChangePassword, street, setStreet, number, setNumber, neighbourhood,
          setNeighbourhood, city, setCity, state, setState, complement, setComplement, onChangeStreet, onChangeNumber, 
          onChangeNeighbourhood, onChangeCity, onChangeState, onChangeComplement }}>
              
            {props.children}
        </GlobalContext.Provider>
    )
    
}