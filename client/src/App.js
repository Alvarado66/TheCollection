import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './components/IntroContent/Intro';
import Navbar from './components/Navbar/Navbar';
import JustPick from './components/MainContent/MainContent';


function App() {
  return (
    <>
      <Intro />
      <Navbar />
      <JustPick />
    </>


  )
};

export default App;
