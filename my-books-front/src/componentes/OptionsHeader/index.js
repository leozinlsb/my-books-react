import styled from 'styled-components'

const Options = styled.ul`
    display: flex;

`

const Option = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
    color: #FBFBF9;
`
const textOptions = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OptionsHeader() {
  return (
    <Options>
      {textOptions.map((text) => (
        <Option><p>{text}</p></Option>
      ))}
    </Options>
  )
}

export default OptionsHeader;