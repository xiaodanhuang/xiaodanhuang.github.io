import React, { Component } from 'react';
import './css/App.css';
import './css/reset.css';
import Iphone from './container/iphone'
import Footer from'./components/footerbar'


class App extends Component {
  render() {
    return (
      <div className="App">
          <Iphone className="iphone"/>
          <Footer className="footer-bar"/>
      </div>
    );
  }
}

export default App;

