import { StyledArticle, Title } from "../AboutUs/styled";
import { Details } from "./styled";


export const Excavator = () => {
  return (
    <StyledArticle>
      <Title>Minikoparka</Title>
      <div>
        <strong>Czym właściwie jest minikoparka? </strong><br />
        Rodzina koparek jednonaczyniowych hydraulicznych o masie eksploatacyjnej do 15 ton.
        Podstawowe elementy konstrukcji są praktycznie takie same jak w typowych koparkach.
        Wyposażone są najczęściej w podwozie gąsienicowe,
        z przodu w niewielki lemiesz oraz mechanizm kolumny obrotu wysięgnika (ang. tzw. boom swing).
        Są to maszyny wielofunkcyjne, uniwersalne wyposażane w wymienny osprzęt roboczy
        (widły, nożyce, młot hydrauliczny, świder) pozwalający dostosować maszynę do charakteru pracy.
        Powszechnie stosowane przy drobnych pracach budowlanych.
      </div>
      <h3>Nasz sprzęt 🦺</h3>
      <Details>
        <div>
          <strong>Minikoparka Bobcat E19</strong>
          wybierana jest przez firmy, którzy oczekują najwyższej siły kopania na łyżce - prawie 21 kN,
          oraz prostej i niezawodnej konstrukcji. E19 stanowi wyjątkowe połączenie najwyższej w swojej klasie siły na łyżce,
          zasięgu roboczego, płynności pracy osprzętu, wydajności hydraulicznej i krótkiego czasu cykli z niezwykłą wytrzymałością,
          a także zapewniaj przestronne i komfortowe otoczenie operatora oraz łatwy dostęp do elementów wymagających serwisowania.
          Model E19 można przewozić na przyczepach o ładowności do 1900 kg,
          a ich transport dodatkowo ułatwiają nowe punkty zaczepu.

          <ul> Ważne dla Państwa dane techniczne:
            <li>wysokość podnoszenia [mm]	2693</li>
            <li>głębokość kopania [mm]	2565</li>
            <li>siła kopiąca [kN]	20.80</li>
            <li>zasięg na poziomie gruntu [mm]	4214</li>
            <li>długość całkowita [mm]	3831</li>
            <li>wysokość całkowita [mm]	2299</li>
            <li>szerokość całkowita [mm]	980</li>
          </ul>
        </div>
        <img src="https://scontent.fwaw3-2.fna.fbcdn.net/v/t39.30808-6/273308780_480776623601341_4372948909831116739_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=804Id5gxdeAAX_OKLBK&_nc_ht=scontent.fwaw3-2.fna&oh=00_AfC6reFL3zfDaoz9r28cW8EaKfgzglyobbNbpWBb1BBdxA&oe=647558A8" alt="" width="300px" height="450px"/>
      </Details>
    </StyledArticle >
  );
};