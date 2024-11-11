import './App.css';
import React, { useState } from 'react';
import VideoEmbed from './components/VideoEmbed';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Background from './Background';
import Contact from './components/Contact';
//add systems design project
//change digital realm website
function App() {


  const [selectedVideo, setSelectedVideo] = useState(null);

  const openVideo = (embedId) => {
    setSelectedVideo(embedId);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const handleButtonClick = (embedId) => {
    openVideo(embedId);
  };

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleLinkClick = () => {
    setIsNavbarOpen(false);
  };
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_4vzj3hj', 'template_xxinp0k', form.current, 'ZmsAjgrP1atwnCSIP')
  //     .then((result) => {
  //       console.log(result.text);
  //       console.log("message sent");
  //     }, (error) => {
  //       console.log(error.text);
  //     });

  //   setSubmitted(true);
  // };

  return (
    <body>
      <div className="container-fluid page">

        <Navbar
          isNavbarOpen={isNavbarOpen}
          handleNavbarToggle={handleNavbarToggle}
          handleLinkClick={handleLinkClick}
        />

        <div className='header-container'>
          <Header />
        </div>

        {/*render the VideoEmbed component if a video is selected */}
        {selectedVideo && (
          <VideoEmbed embedId={selectedVideo} onClose={closeVideo} />
        )}

        <div className='background-container'>
          <Background />
        </div>

        <section id="about" className="pt-5 my-4">
          <About />
        </section>

        <section id="projects" className="text-center">
          <Projects handleButtonClick={handleButtonClick} />
        </section>

        <section id="contact">
          <Contact />

        </section>

        <footer className="py-3 text-center">
        <p>Website created by Andy | Last updated Nov 2024
          </p>
        </footer>
      </div>
    </body>

  );
}


export default App;