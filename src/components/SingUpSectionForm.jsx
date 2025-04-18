// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';
// import pic1 from '../assets/pic2.png';

// import { Link } from 'react-router-dom';

// const SignUpSection = () => {
//   const [fullName, setFullName] = useState(''); // State to store the full name
//   const [email, setEmail] = useState(''); // State to store the email
//   const [phone, setPhone] = useState(''); // State to store the phone number
//   const navigate = useNavigate(); // Use useNavigate hook for navigation

//   const scrollToHero = () => {
//     const heroSection = document.getElementById('hero');
//     console.log("scrollToHero called");

//     if (heroSection) {
//       console.log("Hero section found:", heroSection);
//       heroSection.scrollIntoView({ behavior: 'smooth' });
//     } else {
//       console.log("Hero section not found");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent default form submission

//     // Send data to Zapier webhook
//     try {
//       const response = await fetch('https://hooks.zapier.com/hooks/catch/22269321/2c63gdj/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           fullName,
//           email,
//           phone,
//         }),
//       });

//       if (response.ok) {
//         console.log('Form submitted successfully!');

//         // Navigate to the GreetingSection and pass the full name
//         navigate('/greeting', { state: { fullName } });
//       } else {
//         console.error('Form submission failed:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   };

//   return (
//     <div className="sign-up-container">
//       <div className="image-container">
//         <nav className="navbar">
       
//         </nav>
//         <img src={pic1} alt="Background" className="background-image" />
//         <div className="text-overlay">
//           <h2>Sign Up Now! <br /> Get Early Access</h2>
//           <p>Find a Media Creative!</p>
//         </div>
//       </div>
//       <div className="form-container">
//         <p>...fill out the form below!</p>
//         <form className="form" onSubmit={handleSubmit}> {/* Add onSubmit handler */}
//           <div className="form-group">
//             <input
//               type="text"
//               placeholder="Full Name"
//               required
//               className="input-field"
//               value={fullName} // Bind the input value to state
//               onChange={(e) => setFullName(e.target.value)} // Update state on input change
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="email"
//               placeholder="Email"
//               required
//               className="input-field"
//               value={email} // Bind the input value to state
//               onChange={(e) => setEmail(e.target.value)} // Update state on input change
//             />
//           </div>
//           <div className="form-group">
//             <PhoneInput
//               country={'zw'}
//               placeholder="Enter Phone Number"
//               value={phone} // Bind the phone input value to state
//               onChange={(phone) => setPhone(phone)} // Update state on phone number change
//               inputStyle={{
//                 width: '100%',
//                 padding: '10px',
//                 borderRadius: '5px',
//                 border: 'none',
//                 marginBottom: '10px',
//               }}
//               buttonStyle={{
//                 borderRadius: '5px',
//               }}
//             />
//           </div>
//           <button
//             type="submit"
//             className="submit-button"
//           >
//             JOIN
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUpSection;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import pic1 from '../assets/pic2.png';

import { Link } from 'react-router-dom';
const SignUpSection = () => {
  const [fullName, setFullName] = useState(''); // State to store the full name
  const [email, setEmail] = useState(''); // State to store the email
  const [phone, setPhone] = useState(''); // State to store the phone number
  const navigate = useNavigate(); // Use useNavigate hook for navigation

  const scrollToHero = () => {
    const heroSection = document.getElementById('hero');
    console.log("scrollToHero called");

    if (heroSection) {
      console.log("Hero section found:", heroSection);
      heroSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log("Hero section not found");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    // Navigate to the GreetingSection and pass the full name
    navigate('/greeting', { state: { fullName } });
  };

  return (
    <div className="sign-up-container">
      <div className="image-container">
        <nav className="navbar">
      
     
        </nav>
        <img src={pic1} alt="Background" className="background-image" />
        <div className="text-overlay">
          <h2>Sign Up Now! <br /> Get Early Access</h2>
          <p>Find a Media Creative!</p>
        </div>
      </div>
      <div className="form-container">
        <p>...fill out the form below!</p>
        <form className="form" onSubmit={handleSubmit}> {/* Add onSubmit handler */}
          <div className="form-group">
            <input
              type="text"
              placeholder="Full Name"
              required
              className="input-field"
              value={fullName} // Bind the input value to state
              onChange={(e) => setFullName(e.target.value)} // Update state on input change
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              required
              className="input-field"
              value={email} // Bind the input value to state
              onChange={(e) => setEmail(e.target.value)} // Update state on input change
            />
          </div>
          <div className="form-group">
            <PhoneInput
              country={'zw'}
              placeholder="Enter Phone Number"
              value={phone} // Bind the phone input value to state
              onChange={(phone) => setPhone(phone)} // Update state on phone number change
              inputStyle={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: 'none',
                marginBottom: '10px',
              }}
              buttonStyle={{
                borderRadius: '5px',
              }}
            />
          </div>
          <button
            type="submit"
            className="submit-button"
          >
            JOIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpSection;