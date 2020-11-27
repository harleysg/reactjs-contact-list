import styled from "styled-components";

function useSpace(space) {
  let gap = "";
  switch (space) {
    case "1":
      gap = "padding: 0 0.5rem";
      break;
    case "2":
      gap = "padding: 0 1rem";
      break;
    case "3":
      gap = "padding: 0 1.5rem";
      break;
    case "4":
      gap = "padding: 0 4rem";
      break;
    default:
      gap = "";
      break;
  }
  return gap;
}

export const WrapperStyled = styled.div(({ space }) => {
  return `
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    ${useSpace(space)}
  `;
});

export const wrapperFlex = styled(WrapperStyled)`
  display: flex;
  align-items: center;
`;

// https://codesandbox.io/s/still-fast-kkpjl
