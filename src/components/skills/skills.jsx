import React from 'react';
import './skills.css';

import htmlIcon from '../../pictures/html.png';
import phpIcon from '../../pictures/php.png';
import reactIcon from '../../pictures/react.png';
import angularIcon from '../../pictures/angular.png';
import nodeJSIcon from '../../pictures/nodeJS.png';
import gitIcon from '../../pictures/git.png';

const Skills = () => {
    return (
        <div className="container skills">
            <h3>What skills do I possess?</h3>
            <div id="skills-li">
                <ul>
                    <li id="html">HTML, CSS & JS <img src={htmlIcon} alt=""/></li>
                    <li>PHP <img src={phpIcon} alt=""/></li>
                    <li>React <img src={reactIcon} alt=""/></li>
                    <li>Angular <img src={angularIcon} alt=""/></li>
                    <li>NodeJS <img src={nodeJSIcon} alt=""/></li>
                    <li>Git <img src={gitIcon} alt=""/></li>
                </ul>
            </div>
        </div>
    )
}

export default Skills;