import React from "react";

import Card, { CardSkeleton } from "../Card"
import { Empty } from "../Empty";

import { CardListStyled } from "./styles";

function HandleCard({ list = [], field }){
  if(list.length === 0){
    return <Empty />
  }
  return <>
    {
      list.map((item) => (
        <Card key={`${item.id}`} {...item} field={field} />
      ))
    }
  </>
}

function CardList({ loading = false, data, field, ...others }) {
  if (!Array.isArray(data)){
    return "Warning: Invalid information. data isn´t array."
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
