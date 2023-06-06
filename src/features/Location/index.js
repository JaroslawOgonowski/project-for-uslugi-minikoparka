import { Title } from "../AboutUs/styled";
import Map from "./map";
import { Content, StyledLocation } from "./styled";

export const Location = () => {
  return (
    <StyledLocation>
      <Title>Nasz zakres działalności</Title>
      <Content>Działamy intensywnie w promieniu 20km od Żyrardowa- standardowy zakres widoczny na mapie niżej  🔽<br />
        Jesteśmy również otwarci na zapytania spoza wyznaczonego obszaru- według ustaleń indywidualnych.
      </Content>
      <Map />
      <Content>
        Najczęściej działamy w miejscowościach:<br/>
        <strong>Żyradów | Wiskitki | Jaktorów | Mszczonów | Korytów | Międzyborów | Radziejowice | Słabomierz <br/>
        Henryszew | Stare Kozłowice | Cyganka | Działki | Guzów | Oryszew | Aleksandrów | Łubno | Tomaszew <br/>
        Izdebno | Kaski | Szymanów | Jesionka | Mrozy | Franciszków | Waleriany | Studzieniec | Puszcza Mariańska</strong>
      </Content>
    </StyledLocation>
  );
};