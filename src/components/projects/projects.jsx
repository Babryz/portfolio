import React from 'react';
import './projects.css';

const Projects = () => {
    return (
        <div className="container projects">
            <h3>What have I built?</h3>
            <div id="projects">
                <div className="project" id="weather-app">
                    <h4>React Weather App</h4>
                    <div id="background">
                        <div>
                            <a href="https://github.com/chas-academy/u09-react-weather-app">Code</a>
                        </div>
                    </div>
                </div>
                <div className="project" id="movie-app">
                    <h4>Angular Movie App</h4>
                    <div id="background">
                        <div>
                            <a href="https://github.com/chas-academy/u07-angular-movie-app">Code</a>
                        </div>
                    </div>
                </div>
                <div className="project" id="hangman-game">
                    <h4>Hangman Game</h4>
                    <div id="background">
                        <div>
                            <a href="https://github.com/Babryz/hangmang">Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;