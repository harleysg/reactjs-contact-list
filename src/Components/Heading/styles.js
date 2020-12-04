import styled from "styled-components";

export const HeadingStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 0;

  position: sticky;
  top: var(--size-min-header);
  z-index: var(--z-index-heading);
  background-color: var(--theme_bg_02);

  & > * {
    color: ${(props) => (props.color ? props.color : "inherit")};
    margin: 0;
  }
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${(props) => (props.bg ? props.bg : "inherit")};
  }
`;
