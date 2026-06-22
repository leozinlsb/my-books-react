import Header from './componentes/Header';
import styled from 'styled-components'
import Search from './componentes/Search';
import LastReleases from './componentes/LastReleases';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: #E6E2DD;
}
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Search />
      <LastReleases />
    </AppContainer>
  );
}

export default App;
