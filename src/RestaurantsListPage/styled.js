import styled from 'styled-components'
import Fab from '@material-ui/core/Fab'

export const RestaurantsListContainer = styled.div`
  /* display: flex;
  flex-direction: row; */
  display:grid;
  grid-template-columns: 1fr 1fr ;
  flex-wrap: wrap;
  margin: 30px;
  /* border:solid 1px; */
`

export const CardRestaurants = styled.div`

  
  flex-wrap: wrap;
  
  
  /* border:solid 1px;
   */


`
export const PhotoCard = styled.div`
    display:flex;
    justify-content: center;
`
export const Photo = styled.img`
    height: 30vh;
`