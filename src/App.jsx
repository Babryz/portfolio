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
            <h1>Emil Babra</h1>
            <img src={profilePic} alt="A picture of me"/>
            <h2>Currently studying 
            <br/>Fullstack Webdevelopment</h2>
          </div>
          <nav>
            <ul id="main-menu">
              <li>
                <Link to="/">Projects</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/resume">Resumé</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
            <Switch>
                <Route exact path="/">
                    <Projects />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/resume">
                    <Resume />
                </Route>
            </Switch>
        </main>
    </div>
    </Router>
  );
}

export default App;
