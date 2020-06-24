import React from 'react';
import './about.css';

const About = () => {
    return (
        <div className="container" id="about">
                <h3>About me</h3>
                <p><b>Name: </b>Emil Babra</p>
                <p><b>Age: </b>23 years</p>
                <p><b>Desciption: </b>
                <br/>
                    I'm a social, problemsolving and witty webdevelopment student, currently studying at Chas Academy which is
                    a 2 year education. The reason that I got into devoloping is because I've always been very interested in tech
                     in general and I also like getting creative with how I solve problems, which comes in really handy in 
                     programming itself.
                    <br/>
                    In my spare time I usually play videogames, spend time with people I hold dear, watch or read code related 
                    stuff, browse Youtube or watch esports.</p>
        </div>
    )
}

export default About;