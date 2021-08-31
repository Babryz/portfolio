import React from 'react';
import './projects.css';
import Jackpot from '../../pictures/jackpot-roller.PNG';
import Eventpaket from '../../pictures/eventpaket.PNG';
import Fullstack from '../../pictures/fullstack-js.PNG';

const Projects = () => {
    let projects = [
        {
            title: 'React Jackpot roller',
            links: [
                {
                    title: 'Live',
                    url: 'https://jackpot.emilbabra.se'
                },
                {
                    title: 'Code',
                    url: 'https://github.com/babryz/jackpot-roller'
                },
            ],
            slug: 'jackpot-roller',
            image_path: Jackpot,
            description: 'I saw a jackpot roller in a Youtube video and thought to myself, "Could one make one of those for the web, and then how?". So with the help of React, I set out to make one.'
        },
        {
            title: 'Wordpress/Woocommerce/AlpineJS webshop',
            links: [
                {
                    title: 'Live',
                    url: 'https://eventpaket.se'
                }
            ],
            slug: 'eventpaket',
            image_path: Eventpaket,
            description: "Eventpaket.se, I built this during my internship for one of their clients, the core is set up with WP and WC, but the single product page is where the coding-magic lies, it's completely custom built with AlpineJS and I've modified the WC backend with the help of hooks to pick up all the custom information."
        },
        {
            title: 'React/NodeJS/GraphQL Web Shop',
            links: [
                {
                    title: 'Live',
                    url: 'https://rlitems.emilbabra.se'
                },
                {
                    title: 'Code',
                    url: 'https://github.com/chas-academy/u09-react-weather-app'
                }
            ],
            slug: 'fullstack',
            image_path: Fullstack,
            description: 'Webshop built with React and NodeJS, connects to a MongoDB-database on the backend and connects frontend -> backend with the help of GraphQL. Both code and design made by me.'
        },
    ]

    return (
        <div className="container projects-container">
            <h3>RECENT PROJECTS</h3>
            <div className="projects">
                {/* <div className="project" id="jackpot-roller">
                    <h4>React Jackpot Roller</h4>
                    <div className="background">
                        <div>
                            <a href="https://jackpot.emilbabra.se">Live</a>
                            <a href="https://github.com/babryz/jackpot-roller">Code</a>
                        </div>
                    </div>
                </div>
                <div className="project" id="eventpaket">
                    <h4>Wordpress/Woocommerce/AlpineJS webshop</h4>
                    <div className="background">
                        <div>
                            <a href="https://eventpaket.se">Live</a>
                        </div>
                    </div>
                </div>
                <div className="project" id="fullstack">
                    <h4>React/GraphQL Web Shop</h4>
                    <div className="background">
                        <div>
                            <a href="https://rlitems.emilbabra.se">Live</a>
                            <a href="https://github.com/chas-academy/u11-fullstack-js">Code</a>
                        </div>
                    </div>
                </div>
                <div className="project" id="weather-app">
                    <h4>React Weather App</h4>
                    <div className="background">
                        <div>
                            <a href="https://weather.emilbabra.se">Live</a>
                            <a href="https://github.com/chas-academy/u09-react-weather-app">Code</a>
                        </div>
                    </div>
                </div> */}
                {
                    projects.map((project, i) => {
                        return (
                            // <div className="project" id={project.slug} >
                            //     <h4>{project.title}</h4>
                            //     <div className="background">
                            //         <div>
                            //             {project.links.map((link) => {
                            //                 return <a href={link.url}>{link.title}</a>
                            //             })}
                            //         </div>
                            //     </div>
                            // </div>
                            <div className="project" id={project.slug} key={i}>
                                <img src={project.image_path} className="project-img" alt="" />
                                <div className="project-content">
                                    <div className="project-tags"></div>
                                    <h4 className="project-title">{project.title}</h4>
                                    <p className="project-description">{project.description}</p>
                                </div>
                                <div className="project-links">
                                    {project.links.map((link, i) => {
                                        return <a key={i} className="project-link" href={link.url}>{link.title}</a>
                                    })}
                                </div>
                            </div>
                        )
                        
                    })
                }
            </div>
        </div>
    )
}

export default Projects;
