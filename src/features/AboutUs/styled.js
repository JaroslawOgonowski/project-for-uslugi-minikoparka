import styled from "styled-components";

export const Image = styled.img`
  border-radius: 5px;
  height: 320px;
  margin: 16px 0;

  @media (max-width: 767px){
    width: 40%;
    height: 40%;
  }
`

export const StyledArticle = styled.article`
  width: calc(100%-32px);
  display: flex;
  flex-direction: column;
  margin: 0 16px;
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
`

export const Title = styled.h2`
  font-size: 38px;
  text-align: center;

  @media (max-width: 767px) {
    font-size: 22px;
  }
`
export const Subtitle = styled.h3`
`

export const Content = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
    margin: 0 16px 16px 16px;
   flex-wrap:wrap
  }
`