import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Questionnaire.css'; // Ensure this path is correct

// Updated questions array with four and five questions added
const questions = [
  {
    question: "What is your biggest challenge in finding consistent work opportunies",
    options: [
      "Finding reliable and high-quality talent.",
      "Managing project timelines and communications.",
      "Staying within budget."
    ]
  },
  {
    question: "How do you currently find new project or clients",
    options: [
      "Online platforms and marketplaces.",
      "Word of mouth and personal referrals.",
      "Social media and local listings."
    ]
  },
  {
    question: "What feature would make a creative services platform most appealing to you?",
    options: [
      "Ability to find local creatives for in-person projects.",
      "Access to a diverse range of creative services.",
      "AI-driven quality control and project management."
    ]
  },
  {
    question: "How important is it for you to have access to a platform that connects you with local clients for in-person project",
    options: [
      "Very important - I prefer in person work.",
      "Managing project timelines and deadlines.",
      "Negotiating fair pricing and compensation."
    ]
  },
  {
    question: "What is your primary concern when working with clients",
    options: [
      "Ensuring consistent quality of work.",
      "Somewhat import - it depends on the project",
      "Not very important - I prefer remote work"
    ]
  },
  {
    question:" How much commission are you willing to pay to use a platform tthat guaratees consistent work opportunies",
    options: [
      "Up to 20% commission for guaranted work",
      "Between 10% to 20% commission",
      "Less than 10% commission"
    ]
  }
];

const Questionnaire = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate('/thank-you'); // Navigate to a thank you page or summary
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      navigate('/mediag'); // Go back to greeting if on the first question
    }
  };

  return (
    <div className="questionnaire-container">
      <h1>{`Question ${currentQuestionIndex + 1}/${questions.length}`}</h1>
      <p className="question-text">{questions[currentQuestionIndex].question}</p>
      <div className="options">
        {questions[currentQuestionIndex].options.map((option, index) => (
          <label key={index} className="option">
            <input type="radio" name="option" value={option} />
            {option}
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