import styled from "styled-components";

export const Details = styled.div`
width: 95%;
display: flex;
justify-content: center;
flex: 1 1;
gap: 16px;

@media (max-width: 767px){
  flex-direction: column;
  align-content: center;
}
`