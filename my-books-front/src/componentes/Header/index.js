import Logo from "../Logo"
import OptionsHeader from '../OptionsHeader'
import Icons from '../Icons';
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #1C1A17;
    display: flex;
    justify-content: center;
    align-items: center;
`

function Header() {
    return(
        <HeaderContainer>
            <Logo/>
            <OptionsHeader/>
            <Icons/>
      </HeaderContainer>
    )
}

export default Header;