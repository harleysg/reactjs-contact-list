import styled from "styled-components";

export const Figure = styled.figure((props) => {
  const { rounded, width, active } = props;

  return `
    margin: 0 auto;
    overflow: hidden;  
    border-radius: ${rounded ? "50%" : 0} ;
    max-width: ${width ? width : "150px"};
    box-shadow: ${active ? "0 0 0 4px var(--color_primary)" : null};
  `;
});

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
  margin: auto;
`;
