import { Title } from "../AboutUs/styled";
import Map from "./map";
import { StyledLocation } from "./styled";

export const Location = () => {
  return (
    <StyledLocation>
      <Title>Nasz zakres działalności</Title>
        <Map />
    </StyledLocation>
  );
};