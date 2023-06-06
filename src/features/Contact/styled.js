import styled from "styled-components";

export const Title = styled.h2`
  font-weight: 400;
  font-family: 'Saira', sans-serif;
  font-size: 20px;
  margin: 16px auto;

  @media (max-width: 767px){
    margin: 16px 0;
  }

  @media (min-width: 1700px) {
    font-size: 3vw;
  }
`

export const StyledContact = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  animation: contactAnimation 2s ease normal forwards;

  @media (max-width: 767px){
    width: calc(100% - 32px);
    margin: 0 auto;
    align-items: center;
  }

  @keyframes contactAnimation {
	0% {
		opacity: 0;
		transform: translateY(-250px);
	}

	100% {
		opacity: 1;
		transform: translateY(0);
	}
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

  @media (min-width: 1700px) {
    font-size: 1.6vw;
  }
`;

export const Input = styled.input`
  font-family: 'Saira', sans-serif;
  font-size: 16px;
  padding: 8px;
  border-radius: 5px;

  @media (min-width: 1700px) {
    font-size: 1.6vw;
  }
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

  @media (min-width: 1700px) {
    height: 10vw;
    font-size: 1.6vw;
  }
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

  @media (min-width: 1700px) {
    margin-top: 1vw;
  padding: 1vw;
  font-size: 2vw;
  }
`