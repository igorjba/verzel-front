
import { Header } from '../../components/Header'
import { VehicleGrid } from './components/VehicleGrid'
import { SearchBar } from './components/SearchBar'
import { HomeContainer, StyledTitle, StyledTitleContainer } from './styles'

export function Home() {

  return (
    <HomeContainer>
      <Header />
      <SearchBar />
      <StyledTitleContainer>
        <StyledTitle>Carros usados</StyledTitle>
      </StyledTitleContainer>
      <VehicleGrid />
    </HomeContainer>
  )
}
