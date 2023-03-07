import Filters from './components/filters';
import Layout from './components/layout';
import Profile from './components/profile';
import RepoList from './components/repo-list';
import Search from './components/search';
import repoData from './components/repo-data'
import {useState, useEffect} from 'react'
import {getUser, getRepo, getRepos} from './services/users'
// const repoList = [
//   {
//     name: 'mi primer proyecto con react',
//     id: 123,
//   },
//   {
//     name: 'mi segundo proyecto con react',
//     id: 124
//   }
// ]

function App() {
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])

  useEffect(() => {
    getUser('abelmiraval').then(({data, isError}) =>{
      if(isError){
        console.log('no hemos encotrado a este crack')
        return
      }
      setUser(data)
    })
  }, [])

  useEffect(() => {
    getRepos('abelmiraval').then(({data, isError}) =>{
      if(isError){
        console.log('no hemos encotrado los repos de este crack')
        return
      }
      setRepos(data)
    })
  }, [])

  return (
    <Layout>
        <Profile {...user}></Profile>
        <Filters></Filters>
        <RepoList repoList={repos}></RepoList>
        <Search></Search>
    </Layout>
  );
}

export default App;
