import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './App.css';

import About from './components/about/about';
import Resume from './components/resume/resume';
import Projects from './components/projects/projects';

import profilePic from './pictures/profile-pic.jpg';

function App() {
  return (
    <Router>
    <div className="App">
        <header>
          <div id="presentation">
            <img src={profilePic} alt="A picture of me"/>
            <h1>Emil Babra</h1>
          </div>
          <h2>Currently studying Fullstack Webdevelopment</h2>
        </header>
        <main>
            <About />
            <Projects />
        </main>
    </div>
    </Router>
  );
}

export default App;
