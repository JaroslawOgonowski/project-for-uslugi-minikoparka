import styled from "styled-components";

export const Image = styled.img`
  border-radius: 5px;
  height: 320px;
  margin: 16px 0;

  @media (max-width: 767px){
    width: 40%;
    height: 40%;
  }

  @media (min-width: 1700px) {
    height: 22vw;
  }
`

export const StyledArticle = styled.article`
  width: calc(100%-32px);
  display: flex;
  flex-direction: column;
  margin: 0 2vw;
  animation: articleAnimation 2s ease normal forwards;
  font-size: 1.5vw;
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

  @media (max-width: 767px) {
    font-size: 18px;
  }
`

export const Title = styled.h2`
  font-size: 38px;
  text-align: center;

  @media (max-width: 767px) {
    font-size: 22px;
  }

  @media (min-width: 1700px) {
    font-size: 2.5vw;
  }
`
export const Subtitle = styled.h3`
font-size: 2vw;

  @media (max-width: 767px) {
    font-size: 20px;
  }
`

export const Content = styled.div`
  display: flex;
  gap: 2vw;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
    margin: 0 16px 16px 16px;
    flex-wrap:wrap
  }
`