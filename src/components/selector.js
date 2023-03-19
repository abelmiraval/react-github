import styled from 'styled-components'

const SelectorStyled = styled.select`
  border: none;
  background: var(--buttonBG);
  color: var(--white);
  padding-inline: 1rem;
`

function Selector({children, handleChangeLanguage}) {
  return (
    <SelectorStyled onChange={handleChangeLanguage}>
      {children}
    </SelectorStyled>
  )
}

export default Selector
