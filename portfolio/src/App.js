import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './index.scss'
import Home from './pages/Home/Home'
import About from './pages/About/About'
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
          <Route path='/about' exact component={About} />
          <Route path='/contact' exact component={Home} />

        </Switch>
      </Router>
    </>
  )
}

export default App;
