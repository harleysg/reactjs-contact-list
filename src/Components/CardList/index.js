import React from "react";
import { CardListStyled } from "./styles";

function CardList({ children, ...others }) {
  return <CardListStyled {...others}>{children}</CardListStyled>;
}

export default CardList;
