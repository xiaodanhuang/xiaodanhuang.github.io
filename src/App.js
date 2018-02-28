import React, { Component } from 'react';
import './css/App.css';
import './css/reset.css';
import Iphone from './components/iphone/iphone'
import Footer from './components/common/footerbar'
import FoodRain from './components/foodRain/foodRain'



class App extends Component {
  render() {
    return (
      <div className="App">
          <Iphone className="iphone"/>
          <Footer className="footer-bar"/>
          <FoodRain pic="../../images/icon_food_6.png" />
      </div>
    );
  }
}

export default App;

