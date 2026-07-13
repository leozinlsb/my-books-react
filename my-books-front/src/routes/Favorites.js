import styled from 'styled-components'
import Search from '../componentes/Search';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: #E6E2DD;
}
`

function Favorites() {
  return (
    <AppContainer>
      <Search />
    </AppContainer>
  );
}

export default Favorites;
