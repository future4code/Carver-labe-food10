import React, { useState, useEffect } from 'react'
import  {GlobalContext} from './GlobalStateContext'
import axios from 'axios'

export const AddAdressPage  = () => {

    const [AddAdress, setAddAdress] = useState([])
    const [street, setStreet] = useState('')
    const [number, setNumber] = useState(undefined)
    const [neighbourhood, setNeighbourhood] = useState('')
    const [city, setCity] = useState('')
    const [complement, setComplement] = useState('')
    const [UF, setUF] = useState('')


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

    const onChangeComplement = (event) => {
        setComplement(event.target.value);
    };

    const onChangeUF = (event) => {
        setUF(event.target.value);
    };

    const reset = () => {
        setStreet('')
        setNumber('')
        setNeighbourhood('')
        setCity('')
        setComplement('')
    }

    const putAdress = (event) => {

        event.preventDefault()

        const body = {
        street: street,
        number: number,
        neighbourhood: neighbourhood,
        city: city,
        UF: UF,
        complement: complement
        };

        const rappi4D = "rappi4D"

        const token = localStorage.putItem("token")
        console.log(body)

        axios
        .put(`https://us-central1-missao-newton.cloudfunctions.net/${rappi4D}/address`, body,{
            headers:{
                auth:token,
                'Content-Type': 'application/json',
            }
        })
        .then((res) => {
            reset()
            alert("Cdastro realizado com sucesso!")
        })
        .catch((error) => {
            alert(error);
        })

    }
}

export default AddAdressPage;