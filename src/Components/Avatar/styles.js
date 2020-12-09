import styled from "styled-components"
import {Figure, Img} from "../Image/styles"

export const FigureStyled = styled(Figure)(props => {
  const { width, active } = props;
    
  return `
      display: flex;
      border-radius: 50% ;
      max-width: ${width ? width : "150px"};
      box-shadow: ${active ? "0 0 0 4px var(--color_primary, #c1d72f)" : null};
  `
})

export const ImageStyled = styled(Img)(() => {
  return `
      object-fit: cover;
      object-position: center;
      max-width: 120px;
      min-width: 120px;
      min-height: 120px;
      background-color: var(--color_primary);
  `
})