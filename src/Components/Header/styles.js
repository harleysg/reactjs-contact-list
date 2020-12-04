import styled from "styled-components";

export const Main = styled.header(() => {
  return `
    position: sticky;
    top: 0;
    z-index: var(--z-index-header);
    min-height: var(--size-min-header);

    background-color: var(--theme_bg_04);
    box-shadow: var(--theme_elevation_04);
  `;
});