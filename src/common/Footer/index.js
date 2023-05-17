import { Content, StyledLink, PhoneIcon, SocialLink, SocialLinks, StyledPageFooter, StyledParahraph, Wrapper, MailIcon } from "./styled";
import { ReactComponent as Facebook } from "./images/Facebook_black.svg";

export const Footer = () => (
  <Wrapper>
    <StyledPageFooter>
      <StyledParahraph>Czekamy na kontakt!</StyledParahraph>
      <StyledLink href="mailTo:mini.zyrardow@gmail.com">
        <MailIcon />
        mini.zyrardow@gmail.com
      </StyledLink>
      <br />
      <StyledLink href="tel:+48.513651750">
        <PhoneIcon /> 513 651 750
      </StyledLink>
      <Content>
        Doradzimy, odpowiemy na wszelkie pytania i dostosujemy usługę do twoich potrzeb!
      </Content>
      <SocialLinks>
        <SocialLink href="https://www.facebook.com/mini.zyrardow/"><Facebook /></SocialLink>
      </SocialLinks>
    </StyledPageFooter>
  </Wrapper>
);
