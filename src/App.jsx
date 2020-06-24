import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './App.css';

import About from './components/about/about';
import Resume from './components/resume/resume';
import Projects from './components/projects/projects';

import linkedIn from './pictures/linkedin.jpg'

function App() {
  return (
    <Router>
    <div className="App">
        <header>
          <div id="presentation">
            <img src={linkedIn} alt="A picture of me"/>
            <h1>Emil Babra</h1>
            <h2>Student in Fullstack Webdevelopment</h2>
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
