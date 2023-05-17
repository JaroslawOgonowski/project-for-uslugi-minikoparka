import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100%;
  height: 93px;
  color: #0a0909;
  background: rgb(255,255,255);
  background: linear-gradient(0deg, rgba(255,255,255,1) 65%, rgba(252,156,0,1) 65%, rgba(250,154,0,1) 80%, rgba(255,255,255,0.9920343137254902) 80%);
`;

export const HeaderContent = styled.div`
  max-width: 1360px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: space-between;
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
`;

export const Logo = styled.img`
  width: 60px;
  border-radius: 5px;
  align-self: flex-end;
  margin-bottom: 10px;
  margin-right: 8px;

  @media (max-width: 767px) {
    width:48px;
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  display: flex;
  align-content: center;
  color: black;

  @media (max-width: 420px) {
    font-size: 14px;
    align-items: center;
  }
`;

export const Phone = styled.img`
  width: 32px;
  margin: 0 8px;

  @media (max-width: 385px) {
    width: 24px;
  }
`;

export const Title = styled.h1`
  margin-right: 20%;
  display: flex;
  gap: 4px;

  @media (max-width: 900px) {
    margin-right: 16px;
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

  @media (max-width: 530px) {
    width: 50px;
    justify-content: flex-start;
  }
`;

export const SpanScribe = styled.span`
  font-family: 'Ms Madi', cursive;
  font-size: 36px;

  @media (max-width: 530px) {
    margin-top: 12px;
    font-size: 20px;
  }
`;

export const SpanBlackText = styled.span`
  font-family: 'Black Ops One', cursive;
  font-size: 36px;
  
  @media (max-width: 530px) {
    font-size: 20px;
  }
`;

export const SpanOrangeText = styled.span`
  margin-left: 4px;
  font-family: 'Black Ops One', cursive;
  align-self: flex-end;
  font-size: 36px;
  color: rgba(236, 155, 25, 1);
  
  @media (max-width: 530px) {
    font-size: 20px;
    align-self: start;
    margin-top: 38px;
  }
  `;