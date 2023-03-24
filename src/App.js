import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Filters from './components/filters';
import Layout from './components/layout';
import Profile from './components/profile';
import RepoList from './components/repo-list';
import Search from './components/search';
import Modal from "./modal";
import { getRepos, getUser } from './services/users';

function App() {
  const params = useParams()
  let username = params.user
  if(!username){
    username = 'abelmiraval'
  }
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  const [modal, setModal] = useState(false)
  const [search, setSearch] = useState('')
  const [language, setLanguage] = useState('')
  const [isInvisible, setIsInvisible] = useState(false)

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


  function handleRepoListUpdate(list) {
    if (list.length === 0) {
      setIsInvisible(true);
    } else {
      setIsInvisible(false);
    }
  }

  return (
    <Layout>
        <Modal isActive={modal} setModal={setModal}></Modal>
        <Profile {...user}></Profile>
        <Filters setSearch={setSearch} setLanguage={setLanguage} repoListCount={repos.length} isInvisible={isInvisible}></Filters>
        <RepoList search={search} language={language} repoList={repos} handleRepoListUpdate={handleRepoListUpdate}></RepoList>
        <Search setModal={setModal}></Search>
    </Layout>
  );
}

export default App;
