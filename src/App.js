import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'

import BlogItemDetails from './components/BlogItemDetails'
import NotFound from './components/NotFound'
import Home from './components/Home'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <BrowserRouter>
        <Header />
        <div className="app-body">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/blogs/:id" component={BlogItemDetails} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  </div>
)

export default App
