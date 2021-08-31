import React from 'react';
import './about.css';

const About = () => {
    return (
        <div className="container about">
            <h3>ABOUT ME</h3>
            <div className="about-boxes">
                <div className="about-box">
                    <div className="about-svg">
                        <svg 
                            className="w-6 h-6" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg">
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z">
                            </path>
                        </svg>
                    </div>
                    <h4>Very social</h4>
                    <p>I love talking to people about everything from code and work-related things, to random facts that I've learned during my life.</p>
                </div>
                <div className="about-box">
                    <div className="about-svg">
                        <svg 
                            className="w-6 h-6" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg">
                            <path 
                                strokeLinecap="round"  
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4">
                            </path>
                        </svg>
                    </div>
                    <h4>I <span role="img" aria-label="Heart">💜</span> problems</h4>
                    <p>Problemsolving is my passion. I love jumping into age-old code, try to pinpoint the issue and resolve it.</p>
                </div>
                <div className="about-box">
                    <div className="about-svg">
                        <svg 
                            className="w-6 h-6" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg">
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                            </path>
                        </svg>
                    </div>
                    <h4>Gaming</h4>
                    <p>On my freetime, my go to thing to do is to play games. Both the gameplay and the social part of the games are equally as giving for me.</p>
                </div>
            </div>
        </div>
    )
}

export default About;
