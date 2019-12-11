import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import BeAccessible from './pages/BeAccessible/BeAccessible'
import Start from './pages/Start/Start'
import '../node_modules/video-react/dist/video-react.css'

// import './App.css'

function App() {
  return (
     <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/acessibilidade' component={BeAccessible} />
        <Route path='/comece' component={Start} />
    </Switch>
  )
}

export default App
