import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './Components/HeaderComponent';
import HomeComponent from './Components/HomeComponent';
import {Provider} from 'react-redux'
import {store} from './redux/store'
import EquipmentComponent from './Components/EquipmentComponent'
function App() {
  return (
    <Fragment>
    
      <div>
          <HeaderComponent />
          <HomeComponent />
          <EquipmentComponent/>
     </div>
     </Fragment>

  );
}

export default App;
