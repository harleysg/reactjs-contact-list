import { createGlobalStyle } from "styled-components";

import { reset } from "./reset.styled";
import { theme } from "./theme.styled";

const Styles = createGlobalStyle`
  ${reset}
  ${theme}
`;

export default Styles;
