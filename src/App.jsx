import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './App.css';

import About from './components/about/about';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects';

import profilePic from './pictures/profile-pic.jpg';
import githubIcon from './pictures/github.png';
import linkedInIcon from './pictures/linkedIn.png';
import CV from './files/emil_babra_cv.pdf';

function App() {
  return (
    <div className="App">
        <header>
          <div id="header-container">
            <div id="presentation">
              <img src={profilePic} alt="A picture of me"/>
              <h1>Emil Babra</h1>
            </div>
            <h2>Currently studying Fullstack Webdevelopment</h2>
          </div>
          <div id="contact">
              <ul>
                <li><b>E-mail:</b>brittsboemil@gmail.com</li>
                <li><b>Mobile: </b>+46762447557</li>
                <li><b>LinkedIn: </b><a href="https://www.linkedin.com/in/emil-babra-1b707a1b1"><img src={linkedInIcon} alt=""/></a></li>
                <li><b>Github: </b><a href="https://github.com/Babryz"><img src={githubIcon} alt=""/></a></li>
                <li><b>Resumé: </b><a href={CV} download>Download</a></li>
              </ul>
          </div>
        </header>
        <main>
            <About />
            <Projects />
            <Skills />
        </main>
    </div>
  );
}

export default App;
