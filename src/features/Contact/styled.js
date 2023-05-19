import styled from "styled-components";

export const Title = styled.h2`
  font-weight: 400;
  font-family: 'Saira', sans-serif;
  font-size: 20px;
  margin: 16px auto;

  @media (max-width: 767px){
    margin: 16px 0;
  }
`

export const StyledContact = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;

  @media (max-width: 767px){
    width: 100%;
    margin: 0 16px;
  }
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  @media (max-width: 767px){
    width: 90%;
    justify-content: center;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  margin: 8px 0;
`;

export const Input = styled.input`
  font-family: 'Saira', sans-serif;
  font-size: 16px;
  padding: 8px;
  border-radius: 5px;
`
export const TextArea = styled.textarea`
  width: 100%;
  margin: 0 auto;
  height: 120px;
  font-family: 'Saira', sans-serif;
  font-size: 16px;
  resize: none;
  box-sizing: border-box;
  border-radius: 5px;
`
export const Button = styled.input`
  cursor: pointer;
  margin-top: 10px;
  padding: 10px;
  font-family: 'Saira', sans-serif;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  background-color: #ffc402a8;
  transition: 0.5s;

  &:hover{
    background-color: #dea301ff;
    font-weight: 800;
  }
`