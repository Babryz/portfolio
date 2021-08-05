import React from 'react';
import './skills.css';

import htmlIcon from '../../pictures/html.png';
import phpIcon from '../../pictures/php.png';
import reactIcon from '../../pictures/react.png';
import nodeJSIcon from '../../pictures/nodeJS.png';
import gitIcon from '../../pictures/git.png';
import TSIcon from "../../pictures/typescript.png";
import GraphQLIcon from "../../pictures/graphqlpng.png";
import WCIcon from "../../pictures/woocommerce.png";
import WPIcon from "../../pictures/wordpress.png";
import AlpineIcon from "../../pictures/alpinejs.svg";
import TWIcon from "../../pictures/tailwind.png";

//import angularIcon from '../../pictures/angular.png';

const Skills = () => {
    return (
        <div className="container skills">
            <h3>What skills do I possess?</h3>
            <div id="skills-li">
                <ul>
                    <li><img src={htmlIcon} alt=""/><span>HTML, CSS & JS</span></li>
                    <li><img src={WPIcon} alt=""/><span>Wordpress</span></li>
                    <li><img src={WCIcon} alt=""/><span>Woocommerce</span></li>
                    <li><img src={phpIcon} alt=""/><span>PHP</span></li>
                    <li><img src={reactIcon} alt=""/><span>React</span></li>
                    <li><img src={nodeJSIcon} alt=""/><span>NodeJS</span></li>
                    <li><img src={gitIcon} alt=""/><span>Git</span></li>
                    <li><img src={AlpineIcon} alt=""/><span>AlpineJS</span></li>
                    <li><img src={TWIcon} alt=""/><span>TailwindCSS</span></li>
                    <li><img src={TSIcon} alt=""/><span>TypeScript</span></li>
                    <li><img src={GraphQLIcon} alt=""/><span>GraphQL</span></li>
                    {/* <li><img src={angularIcon} alt=""/><span>Angular </span></li> */}

                </ul>
            </div>
        </div>
    )
}

export default Skills;
