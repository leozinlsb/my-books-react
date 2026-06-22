import Header from './componentes/Header';
import styled from 'styled-components'
import Search from './componentes/Search';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: #E6E2DD;
}
`

function App() {
  return (
    <AppContainer>
      <Header/>
      <Search />
    </AppContainer>
  );
}

export default App;
