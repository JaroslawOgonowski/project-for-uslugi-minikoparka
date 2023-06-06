import styled from "styled-components";
import s1 from "./images/services1.jpg";
import s2 from "./images/services2.jpg";
import s3 from "./images/services3.jpg";

export const StyledServices = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 16px;
  animation: servicesAnimation 1s ease normal forwards;

  @keyframes servicesAnimation {
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
    max-width: 90%;
    margin: 0 auto;
  }

  @media (min-width: 1700px) {
    margin: 0 0.2vw;
  }
`
export const Box = styled.div`
  width: 100%;
  display: flex;
  gap: 5vw;

  @media (max-width: 1150px) {
    flex-direction: column-reverse;
    gap: 32px;
  }

  @media (min-width: 1700px) {
    gap: 0.2vw;
  }
`

export const Title = styled.h2`
  font-size: 38px;
  text-align: center;
  width: 100%;

  @media (max-width: 767px) {
    font-size: 22px;
  }

  @media (min-width: 1700px) {
    font-size: 3vw;
  }
`
export const ServicesList = styled.ul`
  list-style: none;
  li::before {
    content: "👷‍♂️";
    margin-right: 0.5em;
  }

  @media (max-width: 767px) {
    padding: 8px;
  }
`;

export const ServicesDetailsList = styled.ul`
  list-style: none;
  li::before {
    content: "🚧";
    margin-right: 0.5em;
  }
`;

export const MainItem = styled.li`
  margin-bottom: 16px;
  
  @media (min-width: 1700px) {
    font-size: 1.3vw;
  }
`

export const Image = styled.div`
  width: 35%;
  aspect-ratio: 3/4;
  border-radius: 5px;
  background-image: url(${s1});
  background-repeat: no-repeat;
  background-size: cover;
  align-self: center;
  animation-name: backgroundAnimation;
  animation-duration: 30s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @keyframes backgroundAnimation {
    0%, 25%{background-image: url(${s1});    
    background-position-x: 50%;}
    30%, 60%{background-image: url(${s2});
    background-position-x: 30%;}
    65%, 90% {background-image: url(${s3});
    background-position-x: 90%;}
    95%, 100%{background-image: url(${s1});
    background-position-x:50%;}   
  }

  @media (max-width: 1150px) {
    width: 100%;
    height: 150px;
    background-position-y:50%;
  }

  @media (min-width: 1700px) {
    margin-left: 3vw;
  }
`