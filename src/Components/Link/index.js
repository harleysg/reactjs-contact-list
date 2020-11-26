
import { AnchorStyled } from "./styles";

export default function Anchor({children, ...others}){
  return <AnchorStyled {...others}>{children}</AnchorStyled>;
}