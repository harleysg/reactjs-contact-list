import styled from "styled-components";

function useStatus(value) {
  let theme;
  switch (value) {
    case "solid":
      return (theme = `
        background-color: var(--color_primary);
        color: var(--theme_color);
      `);
    case "disabled":
      return (theme = ``);
    case "primary":
      break;
    default:
      theme = `
        box-shadow: 0 0 0 1px currentColor inset;
      `;
      break;
  }
  return theme;
}

// .attrs({ className: "is-active" })

const ButtonStyled = styled.button((props) => {
  return `
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: ${props.rtl ? "row-reverse": "row"};
    gap: 0.3rem;
    
    border-radius: 6px;
    padding: 0.2rem 0.5rem;
    min-height: 2rem;
    
    background-color: var(--theme_bg_12);
    color: var(--color_primary);
    
    ${useStatus(props.theme)}
    
    cursor: pointer;
    text-transform: uppercase;
    font-size: 0.7rem;
    
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      color: var(--theme_color);
    }


    &[class*="c-btn-remove"],
    &[class*="c-btn-delete"] {
      --color_primary: var(--color_tertiary);
      color: var(--color_primary);
    }

  `;
});

export default ButtonStyled;
