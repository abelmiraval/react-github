import { useEffect } from "react";
import styled from "styled-components";
import RepoItem from "./repo-item";

const RepoListStyled = styled.div`
  grid-area: repo-list;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .repoListNotFound{
    display: flex;
    justify-content: center;
    margin-top: 6rem;
    font-size: 1rem;
  }
`;




function RepoList({repoList, search, language, handleRepoListUpdate}) {
  let list = repoList
  if(search !== ''){
    list = list.filter((item) => {
      return item.name.search(search) >= 0
    })
  }

  if(language !== '' && language !== 'all'){
    list = list.filter((item) => {
      return item.language ? item.language.toLowerCase().search(language.toLowerCase()) >= 0 : false
    })
  }

  useEffect(() => {
    if(list.length === 0){
      handleRepoListUpdate(list);
    }
  }, [list, handleRepoListUpdate]);

  return (
    <RepoListStyled>

      {list.length ? list.map((item) => {
        return <RepoItem {...item} key={item.id}/>
      }) :
      <div className="repoListNotFound">
        There are no repositories
      </div>}
    </RepoListStyled>
  )
}

export default RepoList;
