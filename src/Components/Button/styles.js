import styled from "styled-components";

function useStatus(value) {
  let theme;
  switch (value) {
    case "solid":
      return (theme = `
        background-color: var(--color_primary);
      `);
    case "disabled":
      return (theme = ``);
    case "primary":
      break;
    default:
      theme = `
        box-shadow: 0 0 0 1px var(--color_primary) inset;
      `;
      break;
  }
  return theme;
}

const ButtonStyled = styled.button((props) => {
  return `
    display: grid;
    gap: 0.3rem;
    border-radius: 6px;
    padding: 0.1rem 0.5rem;
    background-color: var(--theme_bg_12);
    color: var(--theme_color);
    ${useStatus(props.theme)}
    cursor: pointer;
  `;
});

export default ButtonStyled;
