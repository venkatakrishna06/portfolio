import React from 'react';
import './App.css';
import About from './components/about/about';
import Fotter from './components/fotter/fotter';
import Header from './components/header/header';
import Intro from './components/intro/intro';
import Projects from './components/projects/projects';
import Education from "./components/education/education";



function App() {

  return (
    <div className="App">
      <Header />
      <Intro />

      <About />
        <Education />
        <Projects />


      <Fotter />

    </div>
  );
}

export default App;