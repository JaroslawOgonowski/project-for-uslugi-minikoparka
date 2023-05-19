import { Border, LeftBox, Logo, Owner, Phone, StyledLink, SpanBlackText, SpanOrangeText, SpanScribe, Title, Wrapper, HeaderContent } from "./styled";
import koparka from "./images/Koparka.png"
import phone from "./images/phone.jpg"
import { useEffect, useState } from "react";
export const Header = () => {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize =
      () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener(
      'resize', handleResize
    );
  },
    []);
  return (
    <>
      <Wrapper>
        <HeaderContent>
          <LeftBox>
            <Owner>
              {(width < 372) ? null : <Logo src={koparka} />}
              {(width < 435) ? null : "Radosław Urbaniak"}
              {(width < 700) ? null :
                <StyledLink href="tel:+48.513651750" title="kontakt telefoniczny">
                  <Phone src={phone} alt="" />
                  513 651 750
                </StyledLink>
              }
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
        </HeaderContent>
      </Wrapper>
    </>
  );
};