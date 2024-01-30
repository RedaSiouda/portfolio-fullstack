import { useState, useEffect } from 'react';

import homeLeo from '../assets/Portfolio Pic/project pic/homeLeo.jpg';
import capturingLeo from '../assets/Portfolio Pic/project pic/capturingLeo.jpg';
import aboutLeo from '../assets/Portfolio Pic/project pic/aboutMeLeo.jpg';
import Leo from '../assets/Portfolio Pic/project pic/Leo.jpg';
import signUpNet from '../assets/Portfolio Pic/project pic/signUpNet.jpg';
import signInNet from '../assets/Portfolio Pic/project pic/SignInNet.jpg';
import swiisherSingnUp from '../assets/Portfolio Pic/project pic/Image 28-01-2024 à 22.18.jpg';
import swiisherSignIn from '../assets/Portfolio Pic/project pic/Image 28-01-2024 à 22.19.jpg';
import swiisher from '../assets/Portfolio Pic/project pic/Image 28-01-2024 à 22.22.jpg';
import '../CSS/ProjectCard.css';

function ProjectCard() {
    const projects = [
        { 
            title: 'Portfolio Client', 
            image: [homeLeo, capturingLeo, aboutLeo, Leo], 
            description: "A photographer trusted me to produce his portfolio website. I've used the MERN stack to produce this website.",
            repoURL: 'https://github.com/RedaSiouda/Portfolio_client_photographe',
        },
        { 
            title: 'Swiisher', 
            image: [swiisher, swiisherSignIn, swiisherSingnUp, swiisher], 
            description: "A small social app where you can 'swiish' pictures of your pets. The functionality includes creating a user, login, and posting pictures and text.",
            repoURL: 'https://github.com/RedaSiouda/Swiisher_social_app',
        },
        { 
            title: 'Netflix clone', 
            image: [signUpNet, signInNet, signInNet, signUpNet], 
            description: 'A fullstack MERN clone of Netflix where you can create an account, connect, and see movie recommendations provided by the TMDB external API.',
            repoURL: 'https://github.com/RedaSiouda/Clone_Netflix_fullStack_TMDB_api',
        },
    ];
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Use effect for changing projects
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
        }, 5000); // Change project every 5 seconds

        // Clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, [projects]);

    // Use effect for changing images within the selected project
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projects[currentProjectIndex].image.length);
        }, 3200);

        // Clear the interval when the component unmounts or when the project changes
        return () => clearInterval(interval);
    }, [currentProjectIndex, projects]);



    const opengitRepo = (repoURL) => {
        window.open(repoURL, '_blank');
    };
    return (
        <div className='projectCard'>
            {projects.map((project, projectIndex) => (
                <div key={projectIndex} className="projectCard__card">
                    <div className="projectCard__containerImg">
                        <img
                            src={project.image[currentImageIndex]}
                            alt={project.title}
                            className="projectCard__img"
                        />
                    </div>
                    <div className="projectCard__data">
                        <h4 className="projectCard__title">{project.title}</h4>
                        <p className="projectCard__desc">{project.description}</p>
                        <div className="projectCard__containerBtn">
                        <button onClick={() => opengitRepo(project.repoURL)} className="button type1">
                                View Code
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProjectCard;
