import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100%;
  height: 93px;
  color: #0a0909;
  background: rgb(255,255,255);
  background: linear-gradient(0deg, rgba(255,255,255,1) 65%, rgba(252,156,0,1) 65%, rgba(250,154,0,1) 80%, rgba(255,255,255,0.9920343137254902) 80%);

  @media (min-width: 1700px) {
    height: 5vw;
  }
`;

export const HeaderContent = styled.div`
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 450px) {
    justify-content: space-evenly;
    gap: 0;
  };  

`;

export const LeftBox = styled.div`
  margin-left: 2%;
  display: flex;
  gap: 12px;
  align-self: flex-end;
`;

export const Owner = styled.div`
  align-self: flex-end;
  font-family: 'Saira', sans-serif;
  font-size: 18px;
  display: flex;
  align-items: center;

  @media (max-width: 371px) {
    margin-bottom: 16px;
  };

  @media (min-width: 1700px) {
    font-size: 1.2vw;
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  display: flex;
  align-content: center;
  color: black;
  transition: 0.5s;
  font-weight: 600;

  @media (max-width: 420px) {
    font-size: 14px;
    align-items: center;
  }
  
  &:hover{
    transform: scale(1.02);
  }
`;

export const Phone = styled.img`
  width: 32px;
  margin: 0 8px;

  @media (max-width: 385px) {
    width: 24px;
  }

  @media (min-width: 1700px) {
    width: 2vw;
    margin-left: 1vw;
  }
`;

export const Title = styled.h1`
  margin-right: 20%;
  display: flex;
  gap: 4px;
  animation: titleAnimation 3s ease normal forwards;

  @media (max-width: 900px) {
    margin-right: 16px;
  }

  @keyframes titleAnimation {
	0% {
		opacity: 0;
		transform: translateX(250px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
}
`;

export const Border = styled.div`
  width: 85px;
  height: 93px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(252,156,0,1);

  @media (min-width: 1700px) {
    height: 5vw;
    width: 6vw;
    justify-content: space-evenly;
  }
`;

export const SpanScribe = styled.span`
  font-family: 'Ms Madi', cursive;
  font-size: 36px;

  @media (min-width: 1700px) {
    font-size: 2vw;
  }
`;

export const SpanBlackText = styled.span`
  font-family: 'Black Ops One', cursive;
  
  @media (min-width: 1700px) {
    font-size: 2vw;
  }
`;

export const SpanOrangeText = styled.span`
  margin-left: 4px;
  font-family: 'Black Ops One', cursive;
  align-self: flex-end;
  font-size: 36px;
  color: rgba(236, 155, 25, 1);

  @media (min-width: 1700px) {
    font-size: 2vw;
    margin-left: 0.2vw;
  }
  `;

export const Logo = styled.img`
  width: 60px;
  border-radius: 5px;
  align-self: flex-end;
  margin-bottom: 10px;
  margin-right: 8px;
  animation: logoAnimation 6s ease 0s infinite alternate forwards;

  @media (max-width: 767px) {
    width:48px;
  }

  @media (max-width: 372px) {
    margin-bottom: 0;
  }

  @media (min-width: 1700px) {
    width: 3vw
  }

  @keyframes logoAnimation {
	0% {
		transform: translateX(-18px);
	}
20%{
  transform: rotate(4deg);
}
50%{
  transform: rotate(-6deg);
}
	100% {
		transform: translateX(13px);
	}
}
`;