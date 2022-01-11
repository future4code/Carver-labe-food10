import React from 'react';
import {CardRestContainer} from "./styled"
import { ItemContainer, ItemImage, TextContainer, NameText } from "./syled";



const RestListCard =(props) => {
  return (
    <CardRestContainer>
        <ItemImage alt={name} src={image} />
      <TextContainer>
        <NameText>{name}</NameText>
        <p>
          R${price.toFixed(2)} <b>x{amount}</b>
        </p>
      </TextContainer>
      <button onClick={removeItem}>Remover</button>
    </CardRestContainer>
  );
}

export default RestListCard;
