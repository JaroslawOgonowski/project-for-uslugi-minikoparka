import { Content, Image, StyledArticle, Subtitle, Title } from "./styled";
import owner from "./RadosławUrbaniak.jpg"

export const AboutUs = () => {
  return (
    <>

      <StyledArticle>
        <Title><strong>Usługi minikoparką</strong> - kilka słów o nas</Title>
        <Subtitle>Główny operator:</Subtitle>
        <Content>
          <Image src={owner} alt="Radosław Urbaniak photo" />
          <div>
            Radosław Urbaniak- właściciel firmy, <strong>oprator minikoparki</strong>, posiada 11 lat udokumentowanego doświadczenia.            Jako założyciel PHU Urbaniak z najwyższą dbałością dogląda i realizuje zarówno plan prac,
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