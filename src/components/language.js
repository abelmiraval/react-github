import styled from 'styled-components';

const LanguageStyled = styled.div`
  display: flex;
  gap: .5rem;
  align-items: center;
  &:before{
    content: '';
    inline-size: 1rem;
    block-size: 1rem;
    border-radius: 50%;
    background: ${({ color }) => color}
  }
`

const languages = {
  ruby: {
    color: 'red',
  },
  css: {
    color: 'green',
  },
  javascript: {
    color: 'yellow',
  },
  typescript: {
    color: '#3178C6',
  },
  'c#': {
    color: '#9A4D8C',
  },
  php:{
    color: '#777BB4'
  }
}

function Language({name}) {
  const formatedName = name.toLowerCase()
  const color = languages[formatedName] ?  languages[formatedName].color : 'white';
  return (
    <LanguageStyled color={color}>
      {name}
    </LanguageStyled>
  )
}

export default Language
