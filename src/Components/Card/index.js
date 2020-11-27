import React from "react";

import { Button, Avatar } from "../index";
import { CardStyled, Title, Email, Actions, Body, CardSkeletonStyled } from "./styles";

export default function Card({ full_name: name, email, src, favorite }) {
  return (
    <CardStyled>
      <Avatar src={src} alt="" rounded active={favorite} />
      <Body>
        <Title>{name}</Title>
        <Email>{email}</Email>
      </Body>
      <Actions>
        <Button label="action" />
      </Actions>
    </CardStyled>
  );
}

export function CardSkeleton({ full_name: name, email, src }) {
  return (
    <CardSkeletonStyled>
      <Avatar src={src} alt="" rounded />
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
