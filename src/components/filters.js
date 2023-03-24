import styled from "styled-components";
import InputText from "./input-text";
import Selector from "./selector";
import Separator from "./separator";

const FiltersStyled = styled.div`
  grid-area: filters;
  .count {
    font: var(--headline2-semi-bold);
    color: var(--white);
    margin-block-end: 1.5rem;
    display: none;
  }
  .action-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .select-list {
    display: flex;
    gap: 0.5rem;
  }
  @media screen and (min-width: 768px) {
    .action-list{
      flex-direction: row;
    }
    .count{
      display: block;
    }
  }

`;

function Filters({ repoListCount, setSearch, setLanguage, isInvisible }) {
  function handleChange(event) {
    setSearch(event.target.value);
  }

  function handleChangeLanguage(event) {
    setLanguage(event.target.value);
  }

  return (
    <FiltersStyled>
      <h2 className="count">Repositorios {repoListCount}</h2>
      <div className="action-list">
        <InputText
          placeholder="Busca un repositorio"
          type="search"
          onChange={handleChange}
        />
        <div className="select-list">
          <Selector>
            <option value="all">all</option>
            <option value="forks">forks</option>
          </Selector>
          <Selector handleChangeLanguage={handleChangeLanguage} >
            <option value="all">all</option>
            <option value="html">html</option>
            <option value="css">css</option>
            <option value="javascript">javascript</option>
            <option value="c#">c#</option>
            <option value="php">php</option>

          </Selector>
          <Selector>
            <option value="ordenar" disabled>
              ordenar
            </option>
            <option value="stars">stars</option>
          </Selector>
        </div>
      </div>
      {!isInvisible?  <Separator /> : null }
    </FiltersStyled>
  );
}

export default Filters;
