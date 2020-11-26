import styled from "styled-components";

function handleDisplay(props) {
  if (props.display === "flex") {
    return `
      display: flex;
      & > * {
        min-width: 280px;
      }
    `;
  } else {
    return `
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(auto-fill, minmax(180px, 280px));
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
