import React, { Fragment, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './Components/HeaderComponent';
import HomeComponent from './Components/HomeComponent';
import NavbarComponent from './Components/NavbarComponent'
import { BrowserRouter, Switch, Route, Redirect, withRouter } from 'react-router-dom';

import {Provider} from 'react-redux'
import {store} from './redux/store'

import 'bootstrap/dist/css/bootstrap.css';

import EquipmentComponent from './Components/EquipmentComponent'
function App() {      


  return (
  
    <Fragment>

      <div>
          <HeaderComponent />
          <BrowserRouter>
          <Switch>
            <Route path='/industry' component={HomeComponent}/>
            <Route path='safety-frontend/equipment' component={EquipmentComponent}/>
          </Switch>
          
            </BrowserRouter>
     </div>
     </Fragment>

  );
}

export default App;
