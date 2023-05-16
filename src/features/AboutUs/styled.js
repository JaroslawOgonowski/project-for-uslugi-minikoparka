import styled from "styled-components";

export const Image = styled.img`
border-radius: 5px;
height: 320px;
margin-top: 16px;

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
`

export const Title = styled.h2`
font-size: 38px;
text-align: center;

@media (max-width: 767px) {
  font-size: 22px;
}
`
export const Subtitle = styled.h3`
margin-left: 16px;
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