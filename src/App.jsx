import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
        <header>
            <h1>Emil Babra</h1>
            <nav>
              <ul>
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
            
        </main>
    </div>
    </Router>
  );
}

export default App;
