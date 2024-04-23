import React from 'react'
import './projects.css'
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
const Projects = () => {
    const projectJson = [
        {
            id: '1',
            name: 'SonicPortfolios',
            txt: 'Developed a voice-command-operated website enabling communication with a bot for streamlined interaction and user engagement.',
            link: 'https://ankit5116k.netlify.app/'
        },
        {
            id: '2',
            name: 'HYDPG',
            txt: 'Developed React platform for Hyderabad PG search, dynamic components, efficient data management.',
            link: 'https://hydpg.netlify.app/'
        },
        {
            id: '3',
            name: 'SIIM',
            txt: 'Created responsive college website template: HTML, CSS, JavaScript. Clean design, device-friendly.',
            link: 'https://ankit-1k.github.io/SIIM/'
        },
        {
            id: '4',
            name: 'FilmFlix',
            txt: 'Debuted FilmFlix: dynamic site for Bollywood, Hollywood, and Tollywood films; user-friendly for easy browsing and updated selections.',
            link: 'https://ankit-1k.github.io/movie-website/'
        }
    ];

    return (
        <div>
            <Banner/>
            <h1 className='text-center mt-5 brand-name m-1 '>Projects</h1>
            <div className='d-flex justify-content-center mb-4'>
                <div className='hr bg-dark'></div>
            </div>
            <div class="project-container">
                {
                    projectJson.map((item, index) => (
                        <div class="project-card">
                            <div class="face face1">
                                <div class="content">
                                    {/* <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" /> */}
                                    <h3>{item.name}</h3>
                                </div>
                            </div>
                            <div class="face face2">
                                <div class="content">
                                    <p>{item.txt}</p>
                                    <a href={item.link}>View Project</a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="mt-5">
                <Footer />
            </div>            
        </div>
    )
}

export default Projects