import React, { useState } from 'react';
import './news.css';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';

const News = () => {
    const newsJson = [
        {
            "id": "1",
            "title": "Europe emerges as hotspot for Indian IT M&As, tops buy chart",
            "txt": "Indian IT giants are on a European shopping spree, snapping up companies at a rapid clip. Europe's booming tech sector, outpacing North America, has fueled over a dozen acquisitions since the pandemic.",
            "link": "http://google.com"
        },
        {
            "id": "2",
            "title": "Top IT firms saw wage bills rise 5.5% even as revenue growth dips",
            "txt": "IT companies' cumulative wage cost rose by Rs 18,036 crore in the fiscal year. Experts said this was due to continuity in lateral hiring in high-demand areas such as AI, machine learning, and cloud and engineering services, coupled with the salary increments, even though they are in the lower single digits.",
            "link": "http://example.com/news2"
        },
        {
            "id": "3",
            "title": "Wipro Q4 net profit is down 7.8% to Rs 2,835 crore",
            "txt": "The fourth largest Indian IT service firm, Wipro saw its headcount decline by 9.5 % in the fiscal 24. This is the third time in a decade that the IT major saw a full-year decline in its headcount, by ending the fiscal at a lower number compared to the start of the year.",
            "link": "http://example.com/news3"
        },
        {
            "id": "4",
            "title": "Azim Premji, Rishad reappointed to Wipro board for 5 years",
            "txt": "IT services company Wipro on Friday reported an 8% year-on-year (YoY) fall in consolidated net profit to Rs 2,835 crore for the quarter ended March 2024. It was Rs 3,074 crore in the last year quarter.",
            "link": "http://example.com/news4"
        },
        {
            "id": "5",
            "title": "India's top 3 IT companies see exit of 64,000 employees in FY23-24",
            "txt": "India's IT services industry - a $254 billion powerhouse - has been feeling the heat of global macroeconomic uncertainties and geopolitical flareups as clients turned cautious with IT spends.",
            "link": "http://example.com/news5"
        },
        {
            "id": "6",
            "title": "New Wipro CEO Srinivas Pallia reveals his five point plan to revive company’s growth",
            "txt": "IT services company Wipro on Friday reported an 8% year-on-year (YoY) fall in consolidated net profit to Rs 2,835 crore for the quarter ended March 2024. It was Rs 3,074 crore in the last year quarter.",
            "link": "http://example.com/news6"
        },
        {
            "id": "7",
            "title": "Wipro headcount falls by 9.5% in FY24",
            "txt": "IT services company Wipro on Friday reported an 8% year-on-year (YoY) fall in consolidated net profit to Rs 2,835 crore for the quarter ended March 2024. It was Rs 3,074 crore in the last year quarter.",
            "link": "http://example.com/news7"
        },
        {
            "id": "8",
            "title": "Intel announces Santhosh Viswanathan as India region head",
            "txt": "Intel appointed Santhosh Viswanathan as MD of India region. He brings 21 years of experience to lead Intel's new India region. Hans Chuang named GM of SMG Asia Pacific and Japan, focusing on revenue growth.",
            "link": "http://example.com/news8"
        },
        {
            "id": "9",
            "title": "Infosys Q4 net profit jumps 30%; company buys German tech firm for €450 million",
            "txt": "Revenue guidance for FY25, a key monitorable for investors, remained conspicuously circumspect, although India’s outsourcing bellwether announced its biggest M&A deal in history, committing nearly about half a billion dollars.",
            "link": "http://example.com/news9"
        },
        {
            "id": "10",
            "title": "Tech firms TCS, Accenture, Cognizant lead LinkedIn's top large companies list",
            "txt": "LinkedIn's 2024 Top Companies list in India features Tata Consultancy Services, Accenture, Cognizant, and others. Insights include in-demand skills like investor relations, capital markets, and job opportunities in diverse industries across locations like Bengaluru and Hyderabad.",
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
