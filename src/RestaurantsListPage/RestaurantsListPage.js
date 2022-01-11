
import React from 'react';
import useRequestData from '../hooks/useRequestData';
import { useEffect, useState } from 'react'
import axios from 'axios'
import { RestaurantsListContainer,CardRestaurants,PhotoCard,Photo } from './styled';

// token cadastro:
// "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IndjTVBnM0w2dE00ckxGaXljMGp4IiwibmFtZSI6InJlbmFuMzMzIiwiZW1haWwiOiJyZW5hbjMzM0Bob3RtYWlsLmNvbSIsImNwZiI6IjEwNS4zMzUuMTA4LTMzIiwiaGFzQWRkcmVzcyI6ZmFsc2UsImlhdCI6MTY0MTkyNzQ5Nn0.Mb-X-rGGqv2OmBM-M_CQnT_SMUNwF5IRCpJlm_m7waM"

//token Login:
// "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IndjTVBnM0w2dE00ckxGaXljMGp4IiwibmFtZSI6InJlbmFuMzMzIiwiZW1haWwiOiJyZW5hbjMzM0Bob3RtYWlsLmNvbSIsImNwZiI6IjEwNS4zMzUuMTA4LTMzIiwiaGFzQWRkcmVzcyI6ZmFsc2UsImlhdCI6MTY0MTkyNzYwN30.u4ZKLesTU2zhUPBG5dnQvtQgegES7V_IROR-wDbZoGA"

const RestaurantsListPage =() => {

    const xxx = "rappi4D"
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkhMdERtNnlvQjVmM042VHlqblZxIiwibmFtZSI6InJlbmFuNDQ0IiwiZW1haWwiOiJyZW5hbjQ0NEBob3RtYWlsLmNvbSIsImNwZiI6IjQ0NC40NDUuNDQyLTIyIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTY0MTkzMDc4MH0.gbQJeg956SIH-mPLbw2AKQAox5efCihslzMeoOkyv9w"

    const [restaurants, setRestaurants] = useState ([])
    
    const getRestaurants = () => {
        axios.get ("https://us-central1-missao-newton.cloudfunctions.net/rappi4D/restaurants", {
            headers: {
                auth: token,
            }
        }) .then ((res)=>{
            console.log (res.data)
            setRestaurants (res.data.restaurants)
           }) 
           .catch ((err)=>{
            console.log (err.response.data.message)

        })
        
    }
    useEffect(() => {
        getRestaurants()
        
    }, [])
    
    const mostrarRestaurantes = restaurants.map ((rest)=>{

        return (
            <CardRestaurants>
            Descrição = {rest.description} Nome = {rest.name}
            <PhotoCard>
                    <Photo src={rest.logoUrl} />
                </PhotoCard>
            </CardRestaurants>
        
            )
        
    })
   
    console.log (getRestaurants)
    return (
      <RestaurantsListContainer>
        <p> TESTANDO! </p>
        {mostrarRestaurantes}
        </RestaurantsListContainer>
       
      
    );
    }
  
  export default RestaurantsListPage;