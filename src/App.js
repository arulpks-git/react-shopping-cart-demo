import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'

class App extends Component {
  render() {
    return (
       <BrowserRouter basename="react-shopping-cart-demo">
            <div className="App">
            
              <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                  </Switch>
                  <footer class="page-footer blue accent-4 valign-wrapper">
                    <div class="container center-align">
                      © 2014 Copyright Text
                    </div>
                  </footer>
             </div>

       </BrowserRouter>
      
    );
  }
}

export default App;
