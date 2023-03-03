import {Route, Switch} from 'react-router-dom'
// import {fragment} from 'react'
import Header from './components/Header'
import NotFound from './components/NotFound'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
