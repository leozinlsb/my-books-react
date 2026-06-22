import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const Icon = styled.li`
    margin-right: 40px;
    width: 25px;
`

const IconsContainer = styled.li`
    display: flex;
    align-items: center;
`

const icones = [perfil, sacola]

function Icons() {
    return (<IconsContainer>
        {icones.map((icone) => (
            <Icon><img className='icone' src={icone} alt='icone'></img></Icon>
        ))}
    </IconsContainer>
    )
}

export default Icons;