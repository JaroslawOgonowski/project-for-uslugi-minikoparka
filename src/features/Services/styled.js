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

  @media (max-width: 767px) {
    max-width: 90%;
    margin: 0 auto;
  }
`
export const Box = styled.div`
  width: 100%;
  display: flex;
  gap: 10vw;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 32px;
  }
`

export const Title = styled.h2`
  font-size: 38px;
  text-align: center;
  width: 100%;

  @media (max-width: 767px) {
    font-size: 22px;
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
`

export const Image = styled.div`
  width: 40%;
  aspect-ratio: 3/3.5;
  border-radius: 5px;
  background-image: url(https://scontent.fwaw3-2.fna.fbcdn.net/v/t39.30808-6/311600690_554118770046708_3289223615055676817_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=22Ku-LbEQ6gAX-dwh7J&_nc_ht=scontent.fwaw3-2.fna&oh=00_AfBs0rUXIbjAPn9rYVlbjAV23ziHkAIMKvDeput6vn4quw&oe=64706F9D);
  background-repeat: no-repeat;
  background-size: cover;
  align-self: center;
  animation-name: backgroundAnimation;
  animation-duration: 30s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @keyframes backgroundAnimation {
    0%, 25%{background-image: url(https://scontent.fwaw3-2.fna.fbcdn.net/v/t39.30808-6/311600690_554118770046708_3289223615055676817_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=22Ku-LbEQ6gAX-dwh7J&_nc_ht=scontent.fwaw3-2.fna&oh=00_AfBs0rUXIbjAPn9rYVlbjAV23ziHkAIMKvDeput6vn4quw&oe=64706F9D);    
    background-position-x: 50%;}
    30%, 60%{background-image: url(https://scontent.fwaw3-2.fna.fbcdn.net/v/t39.30808-6/316417724_581764297282155_3269857153402847636_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Vtyj5rV4RB8AX8cFYT-&_nc_ht=scontent.fwaw3-2.fna&oh=00_AfC-moY6rZNpNduLmE0KaevA2E7JNb3NyPm-uBxQKmlxzg&oe=64709124);
    background-position-x: 30%;}
    65%, 90% {background-image: url(https://scontent.fwaw3-1.fna.fbcdn.net/v/t39.30808-6/336482438_196312079818307_2280192020488992182_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=yZEuK61jd3AAX-0AFgg&_nc_ht=scontent.fwaw3-1.fna&oh=00_AfD7lrZXj-HKXU_8hLqgNdZ0reLqop3HbPc1TOUyu1GGww&oe=6470096A);
    background-position-x: 90%;}
    95%, 100%{background-image: url(https://scontent.fwaw3-2.fna.fbcdn.net/v/t39.30808-6/311600690_554118770046708_3289223615055676817_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=22Ku-LbEQ6gAX-dwh7J&_nc_ht=scontent.fwaw3-2.fna&oh=00_AfBs0rUXIbjAPn9rYVlbjAV23ziHkAIMKvDeput6vn4quw&oe=64706F9D);
    background-position-x:50%;}   
  }

  @media (max-width: 767px) {
    width: 60%;
  }
`