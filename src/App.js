import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import BeAccessible from './pages/BeAccessible/BeAccessible'

// import './App.css'

function App() {
  return (
     <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/acessibilidade' component={BeAccessible} />
    </Switch>
  )
}

export default App
