import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Questionnaire.css'; // Ensure this path is correct

const questions = [
    {
        question: "What is your biggest challenge when hiring creative professionals?",
        options: [
            { text: "Finding reliable and high-quality talent.", icon: "🧑‍🎨" },
            { text: "Managing project timelines and communications.", icon: "📅" },
            { text: "Staying within budget.", icon: "💰" }
        ]
    },
    // Add other questions similarly...
];

const Questionnaire = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const navigate = useNavigate();

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            navigate('/thank-you');
        }
    };

    const handleBack = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        } else {
            navigate('/greeting');
        }
    };

    return (
        <div className="questionnaire-container">
            <div className="question-number">
                {questions.map((_, index) => (
                    <div key={index} className={`question-bar ${index <= currentQuestionIndex ? 'active' : ''}`}></div>
                ))}
            </div>

            <h1 className='numbers'>{currentQuestionIndex + 1}/{questions.length}</h1>

            <p className="question-text">{questions[currentQuestionIndex].question}</p>

            <div className="options">
                {questions[currentQuestionIndex].options.map((option, index) => (
                    <label key={index} className="option">
                        <input type="radio" name="option" value={option.text} />
                        <span role="img" aria-label="icon">{option.icon}</span> {option.text}
                    </label>
                ))}
            </div>

            <div className="navigation-buttons">
                <button onClick={handleBack} className="back-button">Back</button>
                <button onClick={handleNext} className="next-button">Next</button>
            </div>

            <footer>
                <p>Copyright 2025 All Rights Reserved</p>
            </footer>
        </div>
    );
};

export default Questionnaire;