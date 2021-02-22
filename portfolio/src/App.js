import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './index.scss'
import Home from './pages/Home/Home'
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path='/home' exact component={Home} />
        </Switch>
      </Router>
    </>
  )
}

export default App;
