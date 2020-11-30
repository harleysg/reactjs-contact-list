import React from "react";

import Card, { CardSkeleton } from "../Card"
import { Empty } from "../Empty";

import { CardListStyled } from "./styles";

function HandleCard({ list = [], field }){
  return <>
    {
      list
        ? list.map((item) => (
          <Card key={`${item.id}`} {...item} field={field} />
        ))
        : <CardSkeleton />
    }
  </>
}

function CardList({ loading = false, data, field, ...others }) {
  if (!Array.isArray(data)){
    return "Warning: Invalidad informatión. can´t show."
  }
  if(!data){
    return <Empty />
  }
  return <CardListStyled {...others}>
    {
      loading
        ? Array(6).fill("a").map((card, i) => <CardSkeleton key={`${card}-${i}`} />)
        : <HandleCard list={ data } field={field}/> 
    }
    </CardListStyled>;
}

export default CardList;
