import defaultSrc from "../../assets/images/profile-default.png"
import { FigureStyled, ImageStyled } from "./styles";

export default function Avatar({src = defaultSrc, ...others}) {
  return <FigureStyled {...others}>
    <ImageStyled src={src} alt={others.alt}/>
  </FigureStyled>;
}
