import React from "react";

import { Button, Image } from "../index";
import { CardStyled, Title, Email, Actions, Body } from "./styles";

const default_SRC =
  "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg";

export default function Card({ name, email, src = default_SRC, favorite }) {
  return (
    <CardStyled>
      <Image src={src} alt="" rounded active={favorite} />
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
