import styled from "styled-components";

export const Details = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
flex: 1 1;
gap: 16px;

@media (min-width: 1700px) {
    gap: 2vw;
  }
`

export const MainContent = styled.div`
line-height: 1.8;
`
export const Banner = styled.h4`
width: 100%;
height: 150px;
display: flex;
align-items: center;
justify-content: center;
background-image: url(${(props) => props.background});
background-position-y: 70%;

@media (min-width: 1700px) {
  background-repeat: no-repeat;
  background-size: cover;
  align-self: center;
  height: 8vw;
  }
`

export const BannerTitle = styled.span`
font-size: 40px;
background-color: #212020c9;
border-radius: 5px;
text-align: center;

@media (min-width: 1700px) {
    font-size: 2.5vw;
  }
`
