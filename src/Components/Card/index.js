import React, { useCallback, useState } from "react";

import { Button, Avatar } from "../index";
import { CardStyled, Title, Email, Actions, Body, CardSkeletonStyled } from "./styles";

export default function Card({ full_name: name, email, src, favorite, field }) {
  const [fav, setFav] = useState(favorite)

  const handleFav = useCallback(() => {
    setFav(!fav)
  }, [setFav, fav])
  
  return (
    <CardStyled>
      <Avatar src={src} alt={`Avatar of ${name}`} rounded active={fav} />
      <Body>
        <Title>{name}</Title>
        <Email>{email}</Email>
      </Body>
      <Actions>
        <Button
          label={ (field === "favorites" && fav) ? "Remove" : null }
          icon={fav ? "close" : "love"}
          onClick={handleFav}
        />
        {
          field === "contacts_list"
            ? <Button icon="trash"/>
            : null
        }
      </Actions>
    </CardStyled>
  );
}

export function CardSkeleton({ full_name: name, src }) {
  return (
    <CardSkeletonStyled>
      <Avatar src={src} alt={`Avatar ${name}`} rounded />
      <Body>
        <Title>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Title>
        <Email>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Email>
      </Body>
      <Actions>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      </Actions>
    </CardSkeletonStyled>
  );
}
