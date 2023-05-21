import { ServicesDetailsList, StyledServices, Title } from "./styled"

export const Services = () => {
  return(
    <StyledServices>
    <Title>Nasze usługi</Title>
    <ul>
      <li>
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
      </li>
      <li>wszelkie wykopy do głębokości 2.6m</li>
      <li>montaż instalacji wodnych</li>
    </ul>
    </StyledServices>
  )
}