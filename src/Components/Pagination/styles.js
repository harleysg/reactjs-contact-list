import styled, { css } from "styled-components";

const Btns = css`
  min-width: 40px;
  padding: 0.4rem;
  border: none;
  background-color: var(--theme_bg_12);
  color: var(--theme_txt);
  cursor: pointer;
`;

export const Buttons = styled.button`
  ${Btns}
`;

export const Navigator = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Controls = styled.div`
  display: grid;
  grid-template-columns: 1fr 80px min-content;
  gap: 1rem;
  padding: 2rem 0rem;
  justify-content: center;
  align-items: center;

  &:before {
    content: "";
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--color_primary);
  }
`;

export const Body = styled.div``;

export const Info = styled.div`
  text-align: center
`;

export const Wrapper = styled.div`
  /* padding: 1rem; */
  user-select: none;
`;


export const NextStyled = styled.button`
  ${Btns}
`
export const PrevStyled = styled.button`
  ${Btns}
`
