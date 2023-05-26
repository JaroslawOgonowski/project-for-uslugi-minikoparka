import { Title } from "../AboutUs/styled";
import Map from "./map";
import { StyledLocation } from "./styled";

export const Location = () => {
  return (
    <StyledLocation>
      <Title>Nasz zakres działalności</Title>
      Działamy intensywnie w promieniu 20km od żyrardowa (standardowy zakres widoczny na mapie niżej 🔽),<br/>
      jesteśmy również otwarci na zapytania spoza wyznaczonego obszaru- według ustaleń indywidualnych.
        <Map />
    </StyledLocation>
  );
};