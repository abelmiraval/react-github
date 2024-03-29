import styled from "styled-components";
import { ButtonRounded } from "./button";
import Icon from './icon'

const SearchStyled = styled.div`
  position: fixed;
  inset-inline-end: 1.5rem;
  inset-block-end: 1.5rem;
`;

function Search({setModal}) {

  function handleClick(){
    setModal(true)
  }

  return (
    <SearchStyled onClick={handleClick}>
      <ButtonRounded icon={<Icon name="search" />}/>
    </SearchStyled>
  )
}

export default Search;
