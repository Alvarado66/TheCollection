import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './components/IntroContent/Intro';
import Navbar from './components/Navbar/Navbar';

import StartBtn from './components/StartButton/StartButton';
import NewChoices from './components/InputOptions/inputopt';

class App extends Component {
  state = {
    visible: true
  };

render() {
  
  return (
    <>
      <Intro />
      <Navbar />
      <StartBtn />
      {/* <NewChoices /> */}
    </>


  )
}
};

export default App;
