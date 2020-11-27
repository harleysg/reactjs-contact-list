import styled from "styled-components"
import { NavLink } from "react-router-dom";

export const LinkStyled = styled(NavLink).attrs({})(() => (`
  text-decoration: none;
  display: grid;
  gap: 0.3rem;
  padding: 0.1rem 0.5rem;
  color: var(--theme_color);
  font-weight: bold;
  cursor: pointer;
  transition: color 0.08s ease-in-out;

  &:hover{
    color: var(--theme_color_LinkOver);
  }
`));

export const AnchorStyled = styled(LinkStyled).attrs({
  activeClassName: "is-active"
})(props => {
  return `
    ${["&."+props.activeClassName]} {
      color: var(--theme_color_LinkOver);
    }
  `
})
