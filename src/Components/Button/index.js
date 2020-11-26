import React from "react";
import ButtonStyled from "./styles";

export default function Button({ icon, label }) {
  return (
    <ButtonStyled>
      <span>{label}</span>
    </ButtonStyled>
  );
}
