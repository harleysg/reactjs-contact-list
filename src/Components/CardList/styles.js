import styled from "styled-components";

function handleDisplay(props) {
  if (props.display === "flex") {
    return `
      display: flex;
      & > * {
        min-width: calc(calc(1300px / 4) - (1.5rem * 1.5));
      }
    `;
  } else {
    return `
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(auto-fill, minmax(180px, calc(calc(1300px / 4) - (1.5rem * 1.5))));
      `;
  }
}

export const CardListStyled = styled.div((props) => {
  return `
    ${handleDisplay(props)}
    gap: 1.5rem;
    padding: 0.3rem 1rem;
  `;
});
