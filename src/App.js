import Filters from './components/filters';
import Layout from './components/layout';
import Profile from './components/profile';
import RepoList from './components/repo-list';
import Search from './components/search';
import {useState, useEffect} from 'react'
import {getUser, getRepos} from './services/users'
import { useParams } from 'react-router-dom'
import Modal from "./modal"

function App() {
  const params = useParams()
  let username = params.user
  if(!username){
    username = 'abelmiraval'
  }
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  const [modal, setModal] = useState(false)

  useEffect(() => {
    getUser(username).then(({data, isError}) =>{
      if(isError){
        console.log('no hemos encotrado a este crack')
        return
      }
      setUser(data)
    })

    getRepos(username).then(({data, isError}) =>{
      if(isError){
        console.log('no hemos encotrado los repos de este crack')
        return
      }
      setRepos(data)
    })
  }, [username])

  return (
    <Layout>
        <Modal isActive={modal} setModal={setModal}></Modal>
        <Profile {...user}></Profile>
        <Filters></Filters>
        <RepoList repoList={repos}></RepoList>
        <Search setModal={setModal}></Search>
    </Layout>
  );
}

export default App;
