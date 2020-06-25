import React from 'react';
import './projects.css';

const Projects = () => {
    return (
        <div className="container" id="projects">
            <h3>Projects</h3>
            <div>
                <div className="project" id="weather-app">
                    <h4>React Weather App</h4>
                    <div>
                        <button><a href="https://github.com/chas-academy/u09-react-weather-app">Code</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;