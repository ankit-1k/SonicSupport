import React, { useState } from 'react';
import allnotes from './../notes.json';

const AllNotes = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const handleChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    if (!allnotes) {
        return <div>No data available</div>;
    }

    const filteredData = selectedCategory
        ? allnotes.filter((item) => item.section.toLowerCase() === selectedCategory.toLowerCase())
        : allnotes;

    return (
        <div className='container'>
            <div>
                <h1 className='text-center mt-5 brand-name m-1 '>All Notes</h1>
                <div className='d-flex justify-content-center mb-4'>
                    <div className='hr bg-dark'></div>
                </div>
                <select className='form-select mt-3 w-50' value={selectedCategory} onChange={handleChange}>
                    <option value="">All Categories</option>
                    {allnotes.map((item, index) => (
                        <option key={index} value={item.section}>{item.section}</option>
                    ))}
                </select>
                <div className="mt-3">
                    {filteredData.map((category, index) => (
                        <div key={index}>
                            <h3 className='text-warning'>{category.section}</h3>
                            {category.questions.map((qna, idx) => (
                                <div key={idx}>
                                    <h4>Q: {qna.question}</h4>
                                    <p>A: {qna.answer}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllNotes;
