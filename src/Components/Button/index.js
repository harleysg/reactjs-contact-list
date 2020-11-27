import React from "react";
import ButtonStyled from "./styles";

export default function Button({ icon, label, ...others }) {
  return (
    <ButtonStyled {...others}>
      <span>{label}</span>
    </ButtonStyled>
  );
}
