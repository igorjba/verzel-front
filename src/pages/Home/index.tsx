
import { Header } from '../../components/Header'
import { SearchBar } from './SearchBar'
import { HomeContainer } from './styles'

export function Home() {

  return (
    <HomeContainer>
      <Header />
      <SearchBar />
    </HomeContainer>
  )
}
