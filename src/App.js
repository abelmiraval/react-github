import './App.css';
import Filters from './components/filters';
import Layout from './components/layout';
import Profile from './components/profile';
import RepoList from './components/repo-list';
import Search from './components/search';

function App() {

  return (
    <Layout>
        <Profile></Profile>
        <Filters></Filters>
        <RepoList></RepoList>
        <Search></Search>
    </Layout>
  );
}

export default App;
