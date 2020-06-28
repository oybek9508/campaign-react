import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Login } from './components/Login/login';
import { Budget } from './components/Budget/Budget';
import { Campaign } from './components/Campaign/Campaign';
import { Adset } from './components/Adset/Adset';
import { Ad } from './components/Ad/Ad';
import { Bidding } from './components/Bidding/Bidding';
import { SideNav } from './components/SideNav/SideNav';
import { TopNav } from './components/TopNav/TopNav';

 

class App extends Component {
  constructor() {
    super()
    this.state = {
      login: false
    }
  }

  loginUser = () => {
    this.setState(
      {
        login: true
      }
    )
  }

  render() {
    const { login } = this.state
    if (login) {
      return (
      <BrowserRouter>
        <div className="App">
          <TopNav />
          <SideNav />
          <Header />
          <Switch>
            <Route exact path='/' component={Budget} />
            <Route path='/campaign' component={Campaign} />
            <Route path='/adset' component={Adset} />
            <Route path='/Ad' component={Ad} />
          </Switch>
        </div>
      </BrowserRouter>);
    } else {
      return (
        <Login  loginUser = {this.loginUser}/>
      )
    }

  }
}

export default App;
