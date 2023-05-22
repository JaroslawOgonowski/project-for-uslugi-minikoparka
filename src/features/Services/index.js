import { MainItem, ServicesDetailsList, StyledServices, Title } from "./styled"

export const Services = () => {
  return (
    <StyledServices>
      <Title>Nasze usługi</Title>
      <ul>

        <MainItem>montaż instalacji wodnych i systemów kanalizacyjnych</MainItem>
        <MainItem>przyłącza wodociągowe</MainItem>
        <MainItem>odkrywki starszych instalacji i fundamentów</MainItem>
        <MainItem>wyrównanie i podnoszenie terenu</MainItem>
        <MainItem>prace kompleksowe przy rozpoczęciu budowy</MainItem>
        <MainItem>budowa podjazdów garażowych i wzjazdów na teren działki</MainItem>
        <MainItem>przygotowanie terenu pod ogród</MainItem>
        <MainItem>
          Wykopy pod:
          <ServicesDetailsList>
            <li>fundamenty</li>
            <li>instalacje: wodne, gazowe, elektryczne</li>
            <li>małą zabudowę: garaże, ogrodzenia, tarasy</li>
            <li>domowe oczyszczalnie i szambo</li>
            <li>systemy nawodnień i drenaż działki</li>
            <li>oczka wodne, stawy</li>
            <li>podjazdy, wyjazdy, ścieżki</li>
          </ServicesDetailsList>
        </MainItem>
        <MainItem>wszelkie wykopy do głębokości 2.6m</MainItem>
      </ul>
    </StyledServices>
  )
} 