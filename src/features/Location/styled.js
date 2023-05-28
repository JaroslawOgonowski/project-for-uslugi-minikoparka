import styled from "styled-components";

export const StyledLocation = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  animation: articleAnimation 2s ease normal forwards;
  
  @keyframes articleAnimation {
	  0% {
		opacity: 0;
		transform: translateX(250px);
	  } 

	  100% {
	  	opacity: 1;
		  transform: translateX(0);
  	}
  }  

  @media(max-width:767px) {
    margin: 0 16px ;
    max-width: 100%;
  }
`