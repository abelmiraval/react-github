import styled from 'styled-components'

const InputText = styled.input`
  border: 1px solid var(--grey);
  background: var(--bg);
  padding-inline: 1rem;
  padding-block: .5rem;
  font: var(--body2-regular);
  border-radius: .5rem;
  color: var(--white);
  flex: 1;

  @media screen and (max-width: 768px){
    margin-block-start: 2.5rem;
  }
`

export default InputText
