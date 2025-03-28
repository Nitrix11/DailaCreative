import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpSection from './components/SingUpSection';
import GreetingSection from './components/GreetingSection';
import Questionnaire from './components/Questionnaire';
import ThankYouSection from './components/ThankYou'; // Import Thank You Component
import Hero from"./components/hero"
import Media from './components/MediaCreative'; 



function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Hero/>} />
        <Route path="/sign-up" element={<SignUpSection />} />
        <Route path="/media" element={<Media />} />
        <Route path="/greeting" element={<GreetingSection />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/thank-you" element={<ThankYouSection />} /> {/* New route */}
        </Routes>

    </Router>
  );
}

export default App;