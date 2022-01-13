import React from 'react';
import { useParams } from 'react-router-dom';



const RestaurantsDetails =() => {

    const params = useParams ()
    console.log (params)

  return (
    <div >
      Olá
    </div>
  );
}

export default RestaurantsDetails;
