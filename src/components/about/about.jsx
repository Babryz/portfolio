import React from 'react';
import './about.css';

import problem from '../../pictures/problem.jpg';

const About = () => {
    return (
        <div className="container" id="about">
                <div id="about-txt">
                    <h3>Who am I?</h3>
                    <p>
                        I'm a social, problemsolving and witty webdeveloper with a degree in fullstack webdevelopment from Chas Academy. The reason that I got into devoloping is because I've always been very interested in tech
                         in general and I also like getting creative with how I solve problems, which comes in really handy in 
                         programming itself.
                        <br/>
                        In my spare time I usually play videogames, spend time with people I hold dear, watch or read code related 
                        stuff, browse Youtube or watch esports.
                    </p>
                </div>
                <img src={problem} alt="Solving a problem"/>
        </div>
    )
}

export default About;
