
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { useAuth } from '../../store/contexts/authContext'
import { SearchBar } from './components/SearchBar'
import { VehicleGrid } from './components/VehicleGrid'
import { HomeContainer, StyledTitle, StyledTitleContainer } from './styles'

export function Home() {
  const { authData } = useAuth();

  return (
    <HomeContainer>
      <Header />
      <SearchBar />
      <StyledTitleContainer>
        <StyledTitle>Carros usados</StyledTitle>
        {authData?.user.role === 'ADMIN' && (
          <button>Cadastrar Carro</button>
        )}
      </StyledTitleContainer>
      <VehicleGrid />
      <Footer />
    </HomeContainer>
  )
}
