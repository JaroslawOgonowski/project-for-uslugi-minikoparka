import { Border, LeftBox, Logo, Owner, Phone, StyledLink, SpanBlackText, SpanOrangeText, SpanScribe, Title, Wrapper } from "./styled";
import koparka from "./images/Koparka.png"
import phone from "./images/phone.jpg"
export const Header = () => {

  return (
    <>
      <Wrapper>
        <LeftBox>
          <Owner>
            <Logo src={koparka} />
            {(window.innerWidth < 500) ? null : "Radosław Urbaniak"}
            <StyledLink href="tel:+48.513651750" title="kontakt telefoniczny">
             <Phone src={phone} alt="" />
              513 651 750
            </StyledLink>
          </Owner>
        </LeftBox>
        <Title>
          <StyledLink href="https://www.facebook.com/mini.zyrardow">
            <Border>
              <SpanScribe>Usługi</SpanScribe>
              <SpanBlackText>mini</SpanBlackText>
            </Border>
            <SpanOrangeText>koparką</SpanOrangeText>
          </StyledLink>
        </Title>
      </Wrapper>
    </>
  );
};