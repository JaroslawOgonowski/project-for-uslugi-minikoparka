import { Border, LeftBox, Logo, Owner, Phone, PhoneLink, SpanBlackText, SpanOrangeText, SpanScribe, Title, Wrapper } from "./styled";
import koparka from "./images/Koparka.png"
import phone from "./images/phone.jpg"
import { BurgerMenu } from "./BurgerMenu";
export const Header = () => {
  return (
    <Wrapper>
      <LeftBox>
        <BurgerMenu />
        <Owner>
          <Logo src={koparka} />
          Radosław Urbaniak
          <PhoneLink href="tel:+48.513651750" title="kontakt telefoniczny">
            <Phone src={phone} alt="" />
            513 651 750
          </PhoneLink>
        </Owner>
      </LeftBox>
      <Title>
        <Border>
          <SpanScribe>Usługi</SpanScribe>
          <SpanBlackText>mini</SpanBlackText>
        </Border>
        <SpanOrangeText>koparką</SpanOrangeText>
      </Title>
    </Wrapper>
  );
};