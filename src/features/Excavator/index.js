import { StyledArticle, Title } from "../AboutUs/styled";
import { Banner, BannerTitle, Details, MainContent } from "./styled";
import banner1 from "./banner1.jpg"

export const Excavator = () => {
  return (
    <StyledArticle>
      <Title>Nasza flota</Title>
      <MainContent>
        Oprócz maszyn transportowych w skład naszego zestawu wchodzi
        <strong> minikoparka Bobcat E19</strong> oraz <strong>zagęszczarka rewersyjna Bomag BPR 55/65 </strong>
        wraz z osprzętem.<br />
      </MainContent>
      <Details>
        <Banner background={banner1}>
          <BannerTitle>Minikoparka</BannerTitle>
        </Banner>
        <div>
        <strong>Minikoparka</strong> to małe, sprawne i szybkie urządenie, które może spełniać swoje funkcje
        wszędzie tam gdzie standardowa koparka nie miałaby szans wjechać.
        Użycie jej ogranicza również zniszczenia podłoża czy ścieżek na Państwa terenie a dzięki wymiennym łyżkom kopiącym
        rozmiar wykopu jest optymalny do zleconej pracy. <br />
          Nasz Bobcat E19 w wersji long, wyposażony jest w łyżki kopiące 25, 40, 50, 60 cm, oraz łyżkę skarpową hydrauliczną 100 cm, ponadto dysponujemy specjalistycznymi grabiami o szerokości 120 cm.
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
        <Banner background={"https://maszbud.eu/images/speasyimagegallery/albums/467/images/001.jpg"}>
          <BannerTitle>Zagęszczarka rewersyjna</BannerTitle>
        </Banner>
        <div>
         
          <strong>Zagęszczarka rewersyjna</strong>  Bomag BPR 55/65 jest dobrym rozwiązaniem zwłaszcza wtedy,
        gdy potrzeba ubić grunt na dużej głębokości.
        Jest także niezastąpiona wszędzie tam, gdzie trzeba manewrować urządzeniem na niewielkiej powierzchni.
        Często też stosuje się ją podczas ubijania ziemi, na której powstały rowy i wykopy.
        Zagęszczarkę dwukierunkową można również z powodzeniem obsługiwać wszędzie tam, gdzie ważne jest,
        by stworzyć odpowiednią aranżację krajobrazu na działce lub w ogrodzie.
        Ponadto można dzięki nim ubić grunt, by stworzyć sztuczny wał, czy nasyp a także
        boiska, grunt pod kostkę brukową oraz wjazdy.
          <ul> </ul>
          <li>szerokość robocza 650 mm</li>
          <li>ciężar 450 kg</li>
          <li>siła odśrodkowa 66 kN.</li>
        </div>
      </Details>
    </StyledArticle >
  );
};