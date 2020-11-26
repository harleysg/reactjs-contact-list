import styled from "styled-components";

export const SectionStyled = styled.section((props) => {
  const { scroll = "" } = props;
  return `
  ${useScroll(scroll)};
    padding: 2rem 0rem;
  `;
});

function useScroll(direction) {
  let style = ``;
  switch (direction) {
    case "x":
      style = `overflow: hidden; overflow-x: auto`;
      break;
    case "y":
      style = `overflow: hidden; overflow-y: auto`;
      break;
    case "hidden":
      style = `overflow: hidden;`;
      break;
    default:
      style = ``;
      break;
  }
  return style;
}
