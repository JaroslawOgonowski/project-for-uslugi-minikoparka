import { Content, Image, StyledArticle, Subtitle, Title } from "./styled";
import owner from "./RadosławUrbaniak.jpg"

export const AboutUs = () => {
  return (
    <>

      <StyledArticle>
        <Title><strong>PHU Urbaniak- usługi minikoparką</strong> - kilka słów o nas</Title>
        <Subtitle>O firmie:</Subtitle>
        Firma powstała w 2022r na bazie wieloletniego doświadczenia w branży. 
        Naszym celem jest realizacja zleceń w cenach rynkowych przy uzględnieniu najwyższej jakości, 
        szybkości wykonania i co najważniejsze zadowolenia klientów. 
        Wykonujemy drobne i duże prace kompleksowo- od wspólnego zaplanowania prac do porządkowania terenu po zleceniu.
        Dzieki wysokiej jakości sprzętu jesteśmy w stanie wykonać każdy wykop do głębokości 2.6 metra- 
        zarówno pod fundamenty, fotowoltnikę, domowe oczyszczalnie lub szambo jak i wszelkiego rodzaju 
        przyłącza wodne (wraz z montażem), elektryczne i gazowe.
        Jesteśmy otwarci na Państwa sugestie i pytania.  
        <Subtitle>Główny operator:</Subtitle>
        <Content>
          <Image src={owner} alt="Radosław Urbaniak photo" />
          <div>
            Radosław Urbaniak- właściciel firmy, <strong>operator minikoparki</strong>, posiada 11 lat udokumentowanego doświadczenia.            Jako założyciel PHU Urbaniak z najwyższą dbałością dogląda i realizuje zarówno plan prac,
            detale, bezpieczeństwo oraz kontakt z klientem.
            Cechują go profesjonalizm, uczciwość, rzetelność i najwyższa jakość świadczonych usług.
            Zawsze znajdzie z Państwem wspólny język, odpowie na każde pytanie, doradzi i zaplanuje pracę oraz zorganizuje wszystkie potrzebne elementy.
            Często również własnoręcznie wykonuje zlecenie co skutkuje najwyższą jakością usługi i oczywiście Państwa komfortem.
          </div>
        </Content>
      </StyledArticle>
    </>
  );
};