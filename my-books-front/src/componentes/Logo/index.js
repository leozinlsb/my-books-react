import logo from "../../imagens/logo.svg"
import styled from "styled-components";

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`

const LogoImg = styled.img`
    height: 100px;
    width: auto; 
    object-fit: contain;
    margin-right: 10px;
`

const LogoText = styled.p`
    color: #FBFBF9;
}

strong {
    letter-spacing: 1px;
    color: #FBFBF9;
}
`

function Logo() {
    return (
        <LogoContainer>
          <LogoImg
            src={logo}
            alt="Logo My Books"
          />
          <LogoText>
            <strong>My</strong> Books
          </LogoText>
        </LogoContainer>
    )
}

export default Logo;