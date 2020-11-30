import { css } from "styled-components";

export const theme = css`
  :root {
    --fz: 17px;
    --ff: sans-serif;

    --color_primary: rgb(141, 0, 255);
    --color_secundary: rgb(133 42 233);
    --color_tertiary: #c1d72f;

    --theme_scroll-track: #dcc9c9;
    --theme_scroll-thumb: linear-gradient(
      45deg,
      var(--color_secundary),
      var(--color_primary)
    );

    --theme_color: #161616;
    --theme_color_LinkOver: var(--color_tertiary);

    --theme_bg_00: white;
    --theme_bg_01: var(--theme_bg_00);
    --theme_bg_02: var(--theme_bg_00);
    --theme_bg_03: var(--theme_bg_00);
    --theme_bg_04: var(--theme_bg_00);
    --theme_bg_06: var(--theme_bg_00);
    --theme_bg_08: var(--theme_bg_00);
    --theme_bg_12: var(--theme_bg_00);
    --theme_bg_16: var(--theme_bg_00);
    --theme_bg_24: var(--theme_bg_00);

    --theme_elevation_00: var(--theme_bg_00);
    --theme_elevation_01: var(--theme_bg_00);
    --theme_elevation_02: var(--theme_bg_00);
    --theme_elevation_03: var(--theme_bg_00);
    --theme_elevation_04: 0px 8px 14px -7px rgb(137 137 137 / 35%);
    --theme_elevation_06: var(--theme_bg_00);
    --theme_elevation_08: var(--theme_bg_00);
    --theme_elevation_12: var(--theme_bg_00);
    --theme_elevation_16: var(--theme_bg_00);
    --theme_elevation_24: var(--theme_bg_00);
  }

  html {
    font-family: var(--ff);
    font-size: var(--fz);
    &[theme="dark"] {
      :root {
        --theme_bg_00: hsl(0deg 0% 7%);
        --theme_bg_01: hsl(0deg 0% 12%);
        --theme_bg_02: hsl(0deg 0% 13%);
        --theme_bg_03: hsl(0deg 0% 14%);
        --theme_bg_04: hsl(0deg 0% 15%);
        --theme_bg_06: hsl(0deg 0% 17%);
        --theme_bg_08: hsl(0deg 0% 18%);
        --theme_bg_12: hsl(0deg 0% 20%);
        --theme_bg_16: hsl(0deg 0% 21%);
        --theme_bg_24: hsl(0deg 0% 22%);
        --theme_bg_32: hsl(0deg 0% 26%);
        --theme_bg_36: hsl(0deg 0% 32%);

        --theme_bg: var(--theme_elevation_00);
        --theme_color: #fefefe;

        --theme_elevation_04: 0px 5px 8px -3px rgb(43 43 43 / 58%);

        --theme_scroll-track: var(--theme_bg_36);
        --theme_scroll-thumb: linear-gradient(
          45deg,
          var(--theme_bg_04),
          var(--theme_bg_02)
        );
      }
    }
  }

  body {
    font-family: inherit;
    background-color: var(--theme_bg_00);
    color: var(--theme_color);
    margin: 0;
  }
  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  /* width */
  ::-webkit-scrollbar {
    width: 5px;
    height: 3px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--theme_scroll-track);
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background-image: var(--theme_scroll-thumb);
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgb(141, 0, 255);
  }
`;
