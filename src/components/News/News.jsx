import React, { useState } from 'react';
import './news.css';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';

const News = () => {
    const newsJson = [
        {
            "id": "1",
            "title": "News One",
            "txt": "This is the text",
            "link": "http://google.com"
        },
        {
            "id": "2",
            "title": "News Two",
            "txt": "This is the text for news two",
            "link": "http://example.com/news2"
        },
        {
            "id": "3",
            "title": "News Three",
            "txt": "This is the text for news three",
            "link": "http://example.com/news3"
        },
        {
            "id": "4",
            "title": "News Four",
            "txt": "This is the text for news four",
            "link": "http://example.com/news4"
        },
        {
            "id": "5",
            "title": "News Five",
            "txt": "This is the text for news five",
            "link": "http://example.com/news5"
        },
        {
            "id": "6",
            "title": "News Six",
            "txt": "This is the text for news six",
            "link": "http://example.com/news6"
        },
        {
            "id": "7",
            "title": "News Seven",
            "txt": "This is the text for news seven",
            "link": "http://example.com/news7"
        },
        {
            "id": "8",
            "title": "News Eight",
            "txt": "This is the text for news eight",
            "link": "http://example.com/news8"
        },
        {
            "id": "9",
            "title": "News Nine",
            "txt": "This is the text for news nine",
            "link": "http://example.com/news9"
        },
        {
            "id": "10",
            "title": "News Ten",
            "txt": "This is the text for news ten",
            "link": "http://example.com/news10"
        }
    ];

    const [showAll, setShowAll] = useState(false);

    const displayedNews = showAll ? newsJson : newsJson.slice(0, 6);

    const handleShowMore = () => {
        setShowAll(true);
    };

    return (
        <>
            <Banner />
            <h1 className='text-center mt-5 brand-name m-1 '>News</h1>
            <div className='d-flex justify-content-center'>
                <div className='hr bg-dark'></div>
            </div>
            <div className='d-flex justify-content-center mt-3'>
                <p className='fw-bold'>Corporate Updates: Stay Informed with the Latest Company News.</p>
            </div>
            <div className='news-card-container container'>
                {displayedNews.map((item, index) => (
                    <article className="card-news mt-5" key={index}>
                        <img
                            className="card-news__background"
                            src="https://i.imgur.com/QYWAcXk.jpeg"
                            alt=""
                            width="1920"
                            height="2193"
                        />
                        <div className="card-news__content | flow">
                            <div className="card-news__content--container | flow">
                                <h2 className="card-news__title news-h2">{item.title}</h2>
                                <p className="card-news__description para-news">
                                    {item.txt}
                                </p>
                            </div>
                            <button className="card-news__button">Read more</button>
                        </div>
                    </article>
                ))}
            </div>
            <div className='d-flex justify-content-center mt-5 mb-5'>
                {!showAll && (
                    <button className="show-more-button button" onClick={handleShowMore}>
                        More
                    </button>
                )}
            </div>
            <Footer />
        </>
    );
};

export default News;
