import React, { Component } from 'react';
import Navbar from './component/Navbar'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './component/home';
import About from './component/About';
import Contact from './component/contact';
import post from './component/post'
import Login from './component/login'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
          <Navbar />
          <Switch>
          <Route exact path='/'  component={Home} />
          <Route path='/About'  component={About} />
          <Route path='/Contact'  component={Contact} />
          <Route path='/Login'  component={Login} />

          {/* route parameter */}
          <Route path='/:Home_id'  component={post} /> 
          {/* route parameter */}
          </Switch>
      </div>
      
      </BrowserRouter>
    );
  }
}

export default App;
