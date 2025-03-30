import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Questionnaire.css'; // Ensure this path is correct

// Updated questions array with icons for each option
const questions = [
  {
    question: "What is your biggest challenge when hiring creative professionals?",
    options: [
      { text: "Finding reliable and high-quality talent.", icon: "🧑‍🎨" }, // Replace with your icon
      { text: "Managing project timelines and communications.", icon: "📅" }, // Replace with your icon
      { text: "Staying within budget.", icon: "💰" } // Replace with your icon
    ]
  },
  {
    question: "How do you currently find creative professionals for your projects?",
    options: [
      { text: "Online platforms and marketplaces.", icon: "🌐" },
      { text: "Word of mouth and personal referrals.", icon: "🗣️" },
      { text: "Social media and local listings.", icon: "📱" }
    ]
  },
  {
    question: "What feature would make a creative services platform most appealing to you?",
    options: [
      { text: "Ability to find local creatives for in-person projects.", icon: "📍" },
      { text: "Access to a diverse range of creative services.", icon: "🎨" },
      { text: "AI-driven quality control and project management.", icon: "🤖" }
    ]
  },
  {
    question: "What is your primary concern when working with freelancers or creatives?",
    options: [
      { text: "Ensuring consistent quality of work.", icon: "⭐" },
      { text: "Managing project timelines and deadlines.", icon: "⏳" },
      { text: "Negotiating fair pricing and compensation.", icon: "💬" }
    ]
  },
  {
    question: "What additional services would you like to see on a creative platform?",
    options: [
      { text: "Project management tools.", icon: "🛠️" },
      { text: "Client reviews and ratings.", icon: "⭐️" },
      { text: "Training and resources for creatives.", icon: "📚" }
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
      navigate('/greeting'); // Go back to greeting if on the first question
    }
  };

  return (
    <div className="questionnaire-container">
      <h1>{`Question ${currentQuestionIndex + 1}/${questions.length}`}</h1>
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