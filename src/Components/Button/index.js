import React from "react";
import { string as isString } from "prop-types"

import { Add, Close, Love, Trash } from "../Icons";
import ButtonStyled from "./styles";

function FilterIcon(name){
  switch (name) {
    case "love":
      return <Love />
    case "add":
      return <Add />
    case "close":
      return <Close />
    case "trash":
      return <Trash />
    default:
      return null
  }
}

export default function Button({ icon, label, ...others }) {
  return (
    <ButtonStyled {...others}>
      {icon ? FilterIcon(icon) : null}
      {label ? <span>{label}</span> : null}
    </ButtonStyled>
  );
}

Button.propTypes = {
  icon: isString,
  label: isString,
  rtl: isString,
  theme: isString,
}