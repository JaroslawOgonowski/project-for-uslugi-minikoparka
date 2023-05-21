import styled from "styled-components";

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
`

export const Title = styled.h2`
  font-size: 38px;
  text-align: center;

  @media (max-width: 767px) {
    font-size: 22px;
  }
`

export const ServicesDetailsList = styled.ul`
list-style: none;
  li::before {
    content: "🚧";
    margin-right: 0.5em;
  }
`;