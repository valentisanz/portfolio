import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './index.scss'
import Home from './pages/Home/Home'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path='/home' exact component={Home} />
          <Route path={"*"} component={Home} />
        </Switch>
      </Router>
    </>
  )
}

export default App;
