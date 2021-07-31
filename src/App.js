import { Route, Switch } from 'react-router-dom';
import AllMeetups from './pages/AllMeetups';
import NewMeetups from './pages/NewMeetups';
import Favourite from './pages/Favourite';
import Layout from './components/layout/Layout';

function App() {
  return <Layout>
    
    <Switch>

      <Route path='/' exact>
        <AllMeetups/>

      </Route>

      <Route path='/new' >
        <NewMeetups/>
      </Route>
      <Route path='/fav' >
        <Favourite/>

      </Route>
    </Switch>

  </Layout>
}

export default App;