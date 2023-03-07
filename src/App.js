import Filters from './components/filters';
import Layout from './components/layout';
import Profile from './components/profile';
import RepoList from './components/repo-list';
import Search from './components/search';
import {useState, useEffect} from 'react'
import {getUser, getRepos} from './services/users'
import { useParams } from 'react-router-dom'

function App() {
  const params = useParams()
  let username = params.user
  if(!username){
    username = 'abelmiraval'
  }
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])

  useEffect(() => {
    getUser(username).then(({data, isError}) =>{
      if(isError){
        console.log('no hemos encotrado a este crack')
        return
      }
      setUser(data)
    })
  }, [])

  useEffect(() => {
    getRepos(username).then(({data, isError}) =>{
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
