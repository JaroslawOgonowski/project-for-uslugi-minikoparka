import styled from "styled-components";

export const StyledPageFooter = styled.footer`
margin-top: 120px;
max-width: 691px;
    @media (max-width: 1360px) {
    margin-left: 16px;
    margin-right: 16px;
    };
`;

export const StyledParahraph = styled.p`
font-weight: 700;
font-size: 12px;
text-transform: uppercase;
margin-bottom: 24px;
`;

export const MailLink = styled.a`
font-weight: 900;
font-size: 32px;
line-height: 39px;
text-decoration: none;
transition: 0.5s;
color: #ffc402a8;
    &:hover{
      color: #ffc402ff;
    };
 @media (max-width: 767px) {
    font-size: 18px;
    };
`;

export const Content = styled.div`
margin-top: 24px;
font-weight: 400;
font-size: 18px;
`;

export const SocialLinks = styled.div`
display: flex;
flex-direction: row;
gap: 24px;
margin-top: 56px;
`;


export const SocialLink = styled.a`
    color: white;
    width: 48px;
    height: 48px;
    transition: 0.5s;

    &:hover{
        color: #ffc402
    };
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    justify-content: flex-start;
    max-width: 1216px;
    margin: auto;
    margin-bottom: 109px;
`;

