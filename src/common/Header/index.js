import { Border, Logo, Owner, SpanBlackText, SpanOrangeText, SpanScribe, Title, Wrapper } from "./styled";
import koparka from "./Koparka.png"
export const Header = () => {
  return (
    <Wrapper>

      <Owner>
        <Logo src={koparka} />
        Radosław Urbaniak
      </Owner>

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