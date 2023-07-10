import React from 'react';
import './projects.css';
import Jackpot from '../../pictures/jackpot-roller.PNG';
import Eventpaket from '../../pictures/eventpaket.PNG';
import GameSeeker from '../../pictures/gameseeker.PNG';
import Maxel from '../../pictures/maxel-se.PNG';
import Uteliv from '../../pictures/uteliv.PNG';
import Multistep from '../../pictures/kontrollbolaget-multistep.PNG';

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
            tags: ['React', 'Redux', 'Figma', 'RestAPI', 'Design (Figma)'],
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
            description: "Eventpaket.se, I built this during my internship for one of their clients as my graduation project. The core is set up with WP and WC, but the single product page is where the coding-magic lies, it's completely custom built with AlpineJS and I've modified the WC backend with the help of hooks to pick up all the custom information."
        },
    ]

    let profProjects = [
        {
            title: 'Maxel',
            links: [
                {
                    title: 'Live',
                    url: 'https://maxel.se/'
                },
            ],
            slug: 'maxel',
            image_path: Maxel,
            tags: ['Wordpress', 'Woocommerce', 'JS/AlpineJS', 'RestAPI', 'PHP'],
            description: 'An e-commerce website for Maxel Belysning to sell their products. Helped build from scratch both visually and helped on backend. Biggest challenge on the site was creating a script for automatically importing products from their API.'
        },
        {
            title: 'Multistep form',
            links: [
                {
                    title: 'Live',
                    url: 'https://www.kontrollbolaget.se/bestall-energibalansberakning-enbostadshus/'
                },
            ],
            slug: 'kontrollbolaget',
            image_path: Multistep,
            tags: [ 'JS/AlpineJS', 'PHP', 'TailwindCSS', 'Wordpress', 'ACF'],
            description: 'One of the most fun features I´ve built so far, a custom multistep form for our customer Kontrollbolaget. It´s a dynamic form where the admin can change everything from the steps, sections and questions/inputs-types themselves. It´s built with the help of AlpineJS & TailwindCSS for the frontend and PHP for the backend.'
        },
        {
            title: 'Aktivt Uteliv',
            links: [
                {
                    title: 'Live',
                    url: 'https://aktivtuteliv.se/'
                },
            ],
            slug: 'uteliv',
            image_path: Uteliv,
            tags: ['Wordpress', 'Woocommerce', 'JS/AlpineJS', 'PHP'],
            description: 'A multisite e-commerce for Aktivt Uteliv to rent out their products. Built all of the frontend from scratch, some features on the backend and have handled bigger part of the support of both back- and frontend after release. The biggest challenge on this site has been the rental bundles since there was no preexisting Wordpress plugin that supported both rentals and bundles.'
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
