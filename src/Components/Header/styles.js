import styled from "styled-components";

export const Main = styled.header((props) => {
  return `
    position: sticky;
    top: 0;
    background-color: var(--theme_bg_04);
    box-shadow: var(--theme_elevation_04);
  `;
});
