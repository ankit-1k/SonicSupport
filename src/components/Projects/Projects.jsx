import React from 'react'
import './projects.css'
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
const Projects = () => {
    const projectJson = [
        {
            id: '1',
            name: 'SonicPortfolios',
            txt: 'This is dummy Txt',
            link: 'www.google.com'
        },
        {
            id: '2',
            name: 'HYDPG',
            txt: 'This is another dummy Txt',
            link: 'www.example.com/project2'
        },
        {
            id: '3',
            name: 'SIIM',
            txt: 'This is yet another dummy Txt',
            link: 'www.example.com/project3'
        },
        {
            id: '4',
            name: 'FilmFlix',
            txt: 'This is the fourth dummy Txt',
            link: 'www.example.com/project4'
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