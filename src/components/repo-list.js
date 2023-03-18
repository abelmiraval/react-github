import styled from "styled-components";
import RepoItem from "./repo-item";

const RepoListStyled = styled.div`
  grid-area: repo-list;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function RepoList({repoList, search, language}) {
  let list = repoList
  if(search !== ''){
    list = list.filter((item) => {
      return item.name.search(search) >= 0
    })
  }

  if(language !== ''){
    list = list.filter((item) => {
      console.log(item.language ? item.language.search(language) >= 0 : false)
      return item.language ? item.language.toLowerCase().search(language.toLowerCase()) >= 0 : false
    })
  }

  return (
    <RepoListStyled>
      {list.map((item) => {
        return <RepoItem {...item} key={item.id}/>
      })}
    </RepoListStyled>
  )
}

export default RepoList;
