import React from "react";

import Card from "../Card"

import { CardListStyled } from "./styles";

function HandleCard({ list = [] }){
  return <>
    {
      list
        ? list.map((item) => (
          <Card key={`${item.id}`} {...item} />
        ))
        : "empty"
    }
  </>
}

function CardList({ loading = false, data, ...others }) {
  if (!Array.isArray(data)){
    return "Warning: Invalidad informatión. can´t show."
  }
  return <CardListStyled {...others}>
    {
      loading
        ? "Loading....."
        : <HandleCard list={ data }/>
    }
    </CardListStyled>;
}

export default CardList;
