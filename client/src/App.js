import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './components/IntroContent/Intro';
import Navbar from './components/Navbar/Navbar';
import JustPick from './components/MainContent/MainContent';
import StartBtn from './components/StartButton/StartButton';

class App extends Component {
  state = {
    visible: true
  };

render() {
  
  return (
    <>
      <Intro />
      <Navbar />
      <JustPick />
      <StartBtn />
    </>


  )
}
};

export default App;
