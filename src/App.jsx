import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpSection from './components/SingUpSectionForm';
import GreetingSection from './components/GreetingSection';
import Questionnaire from './components/Questionnaire';
import ThankYouSection from './components/ThankYou'; // Import Thank You Component
import Hero from"./components/hero"
import Media from './components/MediaCreativeForm'; 
import Mediag from './components/MediaGreeting'; 
import Mediaq from './components/MediaQuestionnaire'; 
import Layout from './components/Layout';

function App() {
  return (
    <Router>
       <Layout></Layout>
      <Routes>
      <Route path="/" element={<Hero/>} />
        <Route path="/sign-up" element={<SignUpSection />} />
        <Route path="/media" element={<Media/>} />
        <Route path="/mediag" element={<Mediag/>} />
        <Route path="/mediaq" element={<Mediaq/>} />
        <Route path="/greeting" element={<GreetingSection />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/thank-you" element={<ThankYouSection />} /> {/* New route */}
        </Routes>
        
    </Router>
  );
}

export default App;