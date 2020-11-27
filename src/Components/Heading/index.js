import React from "react";

import { HeadingStyled } from "./styles";

export default function Heading({ title = "Heading", ...others }) {
  return (
    <HeadingStyled {...others}>
      <h2>{title}</h2>
    </HeadingStyled>
  );
}
