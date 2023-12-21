
import { useContextSelector } from 'use-context-selector'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { useAuth } from '../../store/contexts/authContext'
import { VehicleContext } from '../../store/contexts/vehicleListContext'
import { SearchBar } from './components/SearchBar'
import { VehicleGrid } from './components/VehicleGrid'
import { HomeContainer, StyledTitle, StyledTitleContainer } from './styles'
import { CreateVehicleModal } from './components/CreateVehicleModal'

export function Home() {
  const { authData } = useAuth();
  const showModal = useContextSelector(VehicleContext, (context) => context.showModal);
  const setShowModal = useContextSelector(VehicleContext, (context) => context.setShowModal);

  return (
    <HomeContainer>
      {showModal === 'create' && (
        <CreateVehicleModal />
      )}
      <Header />
      <SearchBar />
      <StyledTitleContainer>
        <StyledTitle>Carros usados</StyledTitle>
        {authData?.user.role === 'ADMIN' && (
          <button onClick={() => setShowModal('create')}>Cadastrar Carro</button>
        )}
      </StyledTitleContainer>
      <VehicleGrid />
      <Footer />
    </HomeContainer>
  )
}
