
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { SearchBar } from './components/SearchBar'
import { VehicleGrid } from './components/VehicleGrid'
import { HomeContainer, StyledTitle, StyledTitleContainer } from './styles'

export function Home() {

  return (
    <HomeContainer>
      <Header />
      <SearchBar />
      <StyledTitleContainer>
        <StyledTitle>Carros usados</StyledTitle>
        <button>Cadastrar Carro</button>
      </StyledTitleContainer>
      <VehicleGrid />
      <Footer />
    </HomeContainer>
  )
}
