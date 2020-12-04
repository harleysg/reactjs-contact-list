import styled, { css } from "styled-components"

const SHARED_INPUT = css`
  width: 70%;
`

export const FormStyled = styled.form`
  background-color: var(--color_primary);
  padding: 1rem;
  
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 7px 8px 2px rgba(0,0,0,0.1), 0px 7px 20px -2px rgba(0,0,0,0.04);
`

export const InputStyled = styled.input`
  padding: 0.5rem 1rem;
  border: none;
  box-shadow: 0px 2px 0px 0 rgb(255 255 255 / 60%);
  background-color: rgb(255 255 255 / 35%);
  ${SHARED_INPUT}
`

export const LabelStyled = styled.label`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  ${SHARED_INPUT}
`