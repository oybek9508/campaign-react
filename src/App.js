import React from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { Login } from './components/Login/login'
import { Budget } from './components/Budget/Budget'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/budget' component={Budget} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
