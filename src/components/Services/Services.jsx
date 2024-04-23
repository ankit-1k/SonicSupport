import React from 'react';
import './services.css';

const ServicesSection = () => {
    return (
        <div className='services-component'>
            <h1 className='text-center mt-5 brand-name m-1'>Services</h1>
            <div className='d-flex justify-content-center'>
                <div className='hr bg-dark'></div>
            </div>
            <div className="row1-container">
                <div className="box box-down cyan">
                    <h2>Easy Notes</h2>
                    <p>Effortless note-taking made simple.</p>
                    <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt=""/>
                </div>

                <div className="box red">
                    <h2>Access Anywhere</h2>
                    <p>Access your notes anytime, anywhere.</p>
                    <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt=""/>
                </div>

                <div className="box box-down blue">
                    <h2>Collaboration</h2>
                    <p>Share and collaborate on notes easily.</p>
                    <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt=""/>
                </div>
            </div>
            <div className="row2-container">
                <div className="box orange">
                    <h2>Interview Question</h2>
                    <p>Organize important <span className='text-info'>interview Q/A </span> efficiently.</p>
                    <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
