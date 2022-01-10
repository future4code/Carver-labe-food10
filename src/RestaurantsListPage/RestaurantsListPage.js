
import React from 'react';
import useRequestData from '../hooks/useRequestData';
import { useEffect, useState } from 'react'
import axios from 'axios'


const RestaurantsListPage =() => {

   
    // const allRestaurants = useRequestData ({}, "https://us-central1-missao-newton.cloudfunctions.net/rappi4D/restaurants")

  

    // const restaurantsCards = allRestaurants.restaurants && allRestaurants.restaurants.map((rest)=>{

    //     return <p>{rest.restaurants.name}</p>

    // })


//     const [listRestaurants, setListRestaurants] = useState ([]);

//   useEffect(() => {
//     axios
//       .get( {},"https://us-central1-missao-newton.cloudfunctions.net/rappi4D/restaurants")
//       .then((res) => {
//         console.log (res.data);
//         setListRestaurants(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

const [listRestaurants, setListRestaurants] = useState([])

    useEffect(() => {
        CardRestaurants()
    }, [])



    const CardRestaurants = () => {
        
            axios.get({},"https://us-central1-missao-newton.cloudfunctions.net/rappi4D/restaurants")
                .then((res) => {
                    console.log (res.data)
                    setListRestaurants(res.data)
                    
                })
                .catch((err) => {
                    console.log(err.response)
                })
        }
    }

  

      const restaurantsCards = listRestaurants.restaurants && listRestaurants.restaurants.map((rest)=>{

        return <p>{rest.restaurants.name}</p>

    })
    console.log (listRestaurants)
    return (
      <div>
        {restaurantsCards}
        {/* {mostrarCards} */}
        
      
        
    </div>
       
      
    );
  
  
  export default RestaurantsListPage;