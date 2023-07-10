import React from 'react';
import './projects.css';
import Jackpot from '../../pictures/jackpot-roller.PNG';
import Eventpaket from '../../pictures/eventpaket.PNG';
import Fullstack from '../../pictures/fullstack-js.PNG';
import GameSeeker from '../../pictures/gameseeker.PNG';

const Projects = () => {
    let projects = [
        {
            title: 'GameSeeker (In progress)',
            links: [
                {
                    title: 'Live',
                    url: 'https://gameseeker.emilbabra.se'
                },
                {
                    title: 'Code',
                    url: 'https://github.com/Babryz/gameseeker'
                },
            ],
            slug: 'gameseeker',
            image_path: GameSeeker,
            tags: ['React', 'Redux', 'Figma', 'RestAPI', 'In progress'],
            description: 'A platform where you can search for games either by scrolling through categories or by searching for them. I got the idea because I wanted to do a project with a public API. I used redux as state-managment simply to avoid dealing with sending state up and down components.'
        },
        {
            title: 'Jackpot roller',
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
            tags: ['React', 'CSS'],
            description: 'I saw a jackpot roller in a Youtube video and thought to myself, "Could one make one of those for the web, and then how?". So with the help of React, I set out to make one.'
        },
        {
            title: 'Eventpaket.se ticket e-commerce',
            links: [
                {
                    title: 'Live',
                    url: 'https://eventpaket.se'
                }
            ],
            slug: 'eventpaket',
            image_path: Eventpaket,
            tags: ['PHP', 'AlpineJS', 'TailwindCSS', 'Sass', 'Woocommerce', 'Wordpress'],
            description: "Eventpaket.se, I built this during my internship for one of their clients, the core is set up with WP and WC, but the single product page is where the coding-magic lies, it's completely custom built with AlpineJS and I've modified the WC backend with the help of hooks to pick up all the custom information."
        },
        {
            title: 'Rocket League items Web Shop',
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
            tags: ['React/TypeScript', 'NodeJS/ExpressJS', 'GraphQL', 'MongoDB'],
            description: 'Webshop built with React and NodeJS, connects to a MongoDB-database on the backend and connects frontend -> backend with the help of GraphQL. Both code and design made by me.'
        },
    ]

    let profProjects = [
        {
            title: 'GameSeeker (In progress)',
            links: [
                {
                    title: 'Live',
                    url: 'https://gameseeker.emilbabra.se'
                },
                {
                    title: 'Code',
                    url: 'https://github.com/Babryz/gameseeker'
                },
            ],
            slug: 'gameseeker',
            image_path: GameSeeker,
            tags: ['React', 'Redux', 'Figma', 'RestAPI', 'In progress'],
            description: 'A platform where you can search for games either by scrolling through categories or by searching for them. I got the idea because I wanted to do a project with a public API. I used redux as state-managment simply to avoid dealing with sending state up and down components.'
        },
    ]

    return (
        <div className="container projects-container" id="projects">
            <div>
                <h3>PROFESSIONAL PROJECTS</h3>
                <div className="projects">
                    {
                        profProjects.map((project, i) => {
                            return (
                                <div className="project" id={project.slug} key={i}>
                                    <img src={project.image_path} className="project-img" alt="" />
                                    <div className="project-content">
                                        <div className="project-tags">
                                            {project.tags.map((tag, i) => {
                                                return <span key={i} className="project-tag">{tag}</span>
                                            })}
                                        </div>
                                        <h4 className="project-title">{project.title}</h4>
                                        <p className="project-description">{project.description}</p>
                                    </div>
                                    <div className="project-links">
                                        {project.links.map((link, i) => {
                                            return <a target="_blank" rel="noopener noreferrer" key={i} className="project-link" href={link.url}>{link.title}</a>
                                        })}
                                    </div>
                                </div>
                            )
                                    
                        })
                    }
                </div>
            </div>
            <div>
                <h3>PERSONAL PROJECTS</h3>
                <div className="projects">
                    {
                        projects.map((project, i) => {
                            return (
                                <div className="project" id={project.slug} key={i}>
                                    <img src={project.image_path} className="project-img" alt="" />
                                    <div className="project-content">
                                        <div className="project-tags">
                                            {project.tags.map((tag, i) => {
                                                return <span key={i} className="project-tag">{tag}</span>
                                            })}
                                        </div>
                                        <h4 className="project-title">{project.title}</h4>
                                        <p className="project-description">{project.description}</p>
                                    </div>
                                    <div className="project-links">
                                        {project.links.map((link, i) => {
                                            return <a target="_blank" rel="noopener noreferrer" key={i} className="project-link" href={link.url}>{link.title}</a>
                                        })}
                                    </div>
                                </div>
                            )
                                    
                        })
                    }
                </div>
            </div>  
        </div>
    )
}

export default Projects;
