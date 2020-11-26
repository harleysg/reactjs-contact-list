import React from "react";

import { SectionStyled } from "./styles";

export default function Section({ children, ...others }) {
  return <SectionStyled {...others}>{children}</SectionStyled>;
}
