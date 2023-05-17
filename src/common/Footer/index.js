import { Content, MailLink, SocialLink, SocialLinks, StyledPageFooter, StyledParahraph, Wrapper } from "./styled";
import { ReactComponent as Facebook } from "./images/Facebook_black.svg";

export const Footer = () => (
    <Wrapper>
        <StyledPageFooter>
            <StyledParahraph>Czekamy na kontakt!</StyledParahraph>
            <MailLink href="mailTo:mini.zyrardow@gmail.com">✉ mini.zyrardow@gmail.com</MailLink><br/>
            <MailLink href="tel:+48.513651750">☎ 513 651 750</MailLink>
            <Content>
                Doradzimy, odpowiemy na wszelkie pytania i dostosujemy usługę do twoich potrzeb!
            </Content>
            <SocialLinks>
                <SocialLink href="https://www.facebook.com/mini.zyrardow/"><Facebook /></SocialLink>
            </SocialLinks>
        </StyledPageFooter>
    </Wrapper>
);
