import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './index.scss'
import Main from './pages/Main/Main'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path={"*"} component={Main} />
        </Switch>
      </Router>
    </>
  )
}

export default App;
