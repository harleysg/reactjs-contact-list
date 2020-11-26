import styled from "styled-components";

export const CardStyled = styled.div`
  display: grid;
  padding: 0.5rem 1rem 0.8rem;
  gap: 0.9rem;
  background-color: var(--theme_bg_04);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  text-align: center;
  justify-content: center;
  border-radius: 3px;
`;

export const Title = styled.h4`
  margin: 0;
`;

export const Email = styled.p((props) => {
  return `
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    
  `;
});

export const Actions = styled.footer((props) => {
  return `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  `;
});

export const Body = styled.section((props) => {
  return `
    padding: 0.5rem;
  `;
});
