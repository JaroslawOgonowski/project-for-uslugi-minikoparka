import { Title } from "../AboutUs/styled";
import Map from "./map";
import { Content, StyledLocation } from "./styled";

export const Location = () => {
  return (
    <StyledLocation>
      <Title>Nasz zakres działalności</Title>
      <Content>Działamy intensywnie w promieniu 20km od żyrardowa- standardowy zakres widoczny na mapie niżej  🔽<br />
        Jesteśmy również otwarci na zapytania spoza wyznaczonego obszaru- według ustaleń indywidualnych.
      </Content>
      <Map />
    </StyledLocation>
  );
};