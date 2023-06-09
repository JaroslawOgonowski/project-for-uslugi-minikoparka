import { Box, Image, MainItem, ServicesDetailsList, ServicesList, StyledServices, Title } from "./styled"

export const Services = () => {
  return (
    <>

      <StyledServices>
        <Title>Nasze usługi</Title>
        <Box>
          <ServicesList>
            <MainItem>montaż instalacji wodnych i systemów kanalizacyjnych</MainItem>
            <MainItem>przyłącza wodociągowe</MainItem>
            <MainItem>odkrywki starszych instalacji i fundamentów</MainItem>
            <MainItem>prace kompleksowe przy rozpoczęciu budowy</MainItem>
            <MainItem>budowa podjazdów garażowych i wjazdów na teren działki</MainItem>
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
            <MainItem>jestesmy w stanie wykonać wykop do maksymalnej głębokości 2.6m</MainItem>
          </ServicesList>
          <Image />
        </Box>
      </StyledServices>
    </>
  )
} 