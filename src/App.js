import './App.css';
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import VideoEmbed from './VideoEmbed';
// IMAGES
import me from './media/me.png';
import edgeDetection from './media/edgeDetection.png';
import waffleBar from './media/waffleBar.png';
import recipeBot from './media/recipeBot.png';
import pizzaMenu from './media/pizza.png';
import hairSalon from './media/hair-salon.png';
import sudoku from './media/sudoku.png';
import skiResort from './media/ski-resort.png';
import flavourfulPlate from './media/flavourful-plate.png';
import riseGrind from './media/riseAndGrind.png';
import smartCube from './media/smartcube1.png';
import microBreak from './media/MicroBreak.png';


function App() {
  const [submitted, setSubmitted] = useState(false);

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
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4vzj3hj', 'template_xxinp0k', form.current, 'ZmsAjgrP1atwnCSIP')
      .then((result) => {
        console.log(result.text);
        console.log("message sent");
      }, (error) => {
        console.log(error.text);
      });

    setSubmitted(true);
  };
  return (
    <body style={{ backgroundColor: 'rgb(252, 238, 233)' }}>
      <div className="container-fluid page">
        <div className='nav-container'>
          <nav className="navbar navbar-expand-lg navbar-light fixed-top container">
            <a className="navbar-brand mx-5" href="#">
              My Portfolio
            </a>
            <button
              className="navbar-toggler"
              type="button"
              onClick={handleNavbarToggle}
              aria-controls="navbarNav"
              aria-expanded={isNavbarOpen}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse justify-content-end mx-5 ${isNavbarOpen ? 'show' : ''}`}
              id="navbarNav"
            >
              <ul className="navbar-nav text-center">
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#about" onClick={handleLinkClick}>
                    About
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#projects" onClick={handleLinkClick}>
                    Projects
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="https://drive.google.com/file/d/17P7rw-V5hTb1fmsePySSkIYZDftxGhRQ/view?usp=sharing" onClick={handleLinkClick}>
                    Resume
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#contact" onClick={handleLinkClick}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <header className="main center-text-vertical jumbotron jumbotron-fluid" style={{ backgroundImage: "url(/images/main.png)" }}>
          <div className="container-fluid d-flex align-items-center justify-content-center text-center">
            <div className=" my-auto position-relative">
              <div className="overlay"></div>
              <h1 className="display-4">
                <span>Hi, I'm</span>
                <span>Andy</span>
              </h1>
              <p className="lead">Welcome to my Portfolio</p>
              <a href='#projects' className='btn btn-light text-dark btn-hover'>See My Projects</a>
            </div>
          </div>
        </header>

        <section id="about" className="pt-5 my-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 about-overlay">
                <h2 className="section-title">About Me</h2>
                <p className="section-description">
                  Hello there! I'm Andy, a passionate front-end web developer with a strong desire to create visually appealing and user-friendly websites. As a beginner in the field, I bring a fresh perspective and a curiosity to learn and grow.
                </p>
                <p className="section-description">
                  I have been working on my skills through self-study and personal projects. I am committed to mastering the latest web development technologies and staying updated with industry trends.
                  With a solid foundation in HTML, CSS, and JavaScript, as well as Bootstrap, Flask and React, I am eager to contribute to exciting projects!
                </p>
                <p className="section-description">
                  Thank you for taking the time to visit my portfolio website. I invite you to explore my projects and get in touch if you're interested in collaborating or discussing potential opportunities. Let's build something great together!
                </p>
                <p>I created this website myself! Check out the code for it over on my <a href='https://github.com/andy-iio/andy-iio.github.io' className='btn-outline'>github</a>.</p>
              </div>
              <div className="col-lg-6">
                <img src={me} className="img-fluid" alt="cartoon image of me" />
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="text-center">
          <div className="container">
            <h2 className="mb-4 text-center">My Projects</h2>
            <div className="row">

            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100 d-flex flex-column">
                  <img src={recipeBot} className="card-img-top p-3" alt="Recipe Bot" />
                  <div className="card-body">
                    <h5 className="card-title">Recipe Bot</h5>
                    <p className="card-text">Using a postgresSQL database, python, and Flask, this website asks a series of questions, and then returns some recipe options based on the answers.</p>
                  </div>
                  <div className='row justify-content-center mb-3'>
                    <div className='col-auto'>
                      <a className='btn btn-dark' onClick={() => handleButtonClick('x6vwteoy-hg')}>See Demo</a>
                    </div>
                  </div>
                </div>
              </div>

            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100 d-flex flex-column">
                  <img src={waffleBar} className="card-img-top p-3" alt="Waffle Bar Website" />
                  <div className="card-body" style={{ height: '150px' }}>
                    <h5 className="card-title">The Waffle Bar</h5>
                    <p className="card-text">Website built using React and Bootstrap, designed to look great on any sized screen.</p>
                  </div>
                  <div className='row justify-content-center mb-3'>
                    <div className='col-auto'>
                      <a className='btn btn-dark' href='https://andy-iio.github.io/the-waffle-bar/'>Visit Site</a>
                    </div>
                    <div className='col-auto'>
                      <a className='btn btn-dark' href='https://github.com/andy-iio/the-waffle-bar'>See Code</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100 d-flex flex-column">
                  <img src={microBreak} className="card-img-top p-3" alt="Micro Break Website" />
                  <div className="card-body">
                    <h5 className="card-title">Micro break Tasks</h5>
                    <p className="card-text">Using Javascript and bootstrap, this app is a convenient online platform designed to optimize your short moments of respite during work.</p>
                  </div>
                  <div className='row justify-content-center mb-3'>
                    <div className='col-auto'>
                      <a className='btn btn-dark' href='https://andy-iio.github.io/MicroBreak/'>Visit Site</a>
                    </div>
                    <div className='col-auto'>
                      <a className='btn btn-dark' href='https://github.com/andy-iio/MicroBreak'>See Code</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100 d-flex flex-column">
                  <img src={edgeDetection} className="card-img-top p-3" alt="Edge Dectection Website" />
                  <div className="card-body" style={{ height: '150px' }}>
                    <h5 className="card-title">Image Edge Detection</h5>
                    <p className="card-text">
                      Using cv2, numpy, and matplotlib, this program takes an image and detects the edges, returning a greyscale version and an outline.
                    </p>
                  </div>
                  <div className='row justify-content-center mb-3'>
                    <div className='col-auto'>
                      <a className='btn btn-dark' onClick={() => handleButtonClick('EZ1evF_kN9s')}>
                        See Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100 d-flex flex-column">
                  <img src={riseGrind} className="card-img-top p-3" alt="Rise and Grind Coffee Website" />
                  <div className="card-body">
                    <h5 className="card-title">Rise & Grind Coffee</h5>
                    <p className="card-text">Using Javascript, this website features a changing typed message on the homepage.</p>
                  </div>
                  <div className='row justify-content-center mb-3'>
                    <div className='col-auto'>
                      <a className='btn btn-dark' onClick={() => handleButtonClick('v9EQoMp8OZw')}>
                        See Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100 d-flex flex-column">
                  <img src={smartCube} className="card-img-top p-3" alt="Smart Cube Website" />
                  <div className="card-body" style={{ height: '150px' }}>
                    <h5 className="card-title">Smart Cube Solutions</h5>
                    <p className="card-text">This site features an animated CSS loading screen, and then a bootstrap based homepage.</p>
                  </div>
                  <div className='row justify-content-center mb-3'>
                    <div className='col-auto'>
                      <a className='btn btn-dark' href='https://andy-iio.github.io/Smart-cube-solutions'>Visit Site</a>
                    </div>
                    <div className='col-auto'>
                      <a className='btn btn-dark' href='https://github.com/andy-iio/Smart-cube-solutions'>See Code</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100 d-flex flex-column">
                  <img src={skiResort} className="card-img-top p-3" alt="Ski Resort Website" />
                  <div className="card-body">
                    <h5 className="card-title">The Summit Ski Resort</h5>
                    <p className="card-text">Simple HTML and CSS practice project for a ski resort webpage, featuring a full page cover photo and more info on scroll.</p>
                  </div>
                  <div className='row justify-content-center mb-3'>
                    <div className='col-auto'>
                      <a className='btn btn-dark' onClick={() => handleButtonClick('F0MaKLprbw0')}>
                        See Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100 d-flex flex-column">
                  <img src={flavourfulPlate} className="card-img-top p-3" alt="The flavouful plate website" />
                  <div className="card-body">
                    <h5 className="card-title">The Flavourful Plate</h5>
                    <p className="card-text">A recipe blog website created using HTML, Bootstrap and custom CSS, with multiple pages and recipes. </p>
                  </div>
                  <div className='row justify-content-center mb-3'>
                    <div className='col-auto'>
                      <a className='btn btn-dark' onClick={() => handleButtonClick('FbHVT02EKtU')}>
                        See Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100 d-flex flex-column">
                  <img src={sudoku} className="card-img-top p-3" alt="Sudoku Solver" />
                  <div className="card-body">
                    <h5 className="card-title">Sudoku Solver</h5>
                    <p className="card-text">Using Javascript, this app solves Sudoku puzzles using a backtracking algorithm. It fills in empty cells by recursively trying valid choices until a solution is found.</p>
                  </div>
                  <div className='row justify-content-center mb-3'>
                    <div className='col-auto'>
                      <a className='btn btn-dark' onClick={() => handleButtonClick('4eujFyiw7vA')}>
                        See Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              

              {/* <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100 d-flex flex-column">
                  <img src={pizzaMenu} className="card-img-top p-3" alt="Pizzeria Website" />
                  <div className="card-body">
                    <h5 className="card-title">Pizzeria Menu</h5>
                    <p className="card-text">Built using React and Bootstrap, this website features an ad carousel that loops throught the different deals, as well as the restaurants full menu. </p>
                  </div>
                  <div className='row justify-content-center mb-3'>
                    <div className='col-auto'>
                      <a className='btn btn-dark' onClick={() => handleButtonClick('D5NMRLUHtsA')}>
                        See Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          {/* Render the VideoEmbed component if a video is selected */}
          {selectedVideo && (
            <VideoEmbed embedId={selectedVideo} onClose={closeVideo} />
          )}
        </section>

        <section id="contact">
          <div className="container my-5">
            <div className="row contact-form">
              <h2 className="text-center">Contact Me</h2>
              {submitted ? (
                <p className='text-center'>Thank you for your message! I will be in touch shortly.</p>
              ) : (
                <form ref={form} onSubmit={sendEmail}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="user_name" className="form-control" id="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="user_email" className="form-control" id="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" className="form-control" id="message" rows="5" required />
                  </div>
                  <input type="submit" className="btn btn-primary my-3 float-end px-4" value="Send" />
                </form>
              )}
            </div>
          </div>
        </section>

        <footer className="py-3 text-center">
          <p>Website created by Andy -- Check out my <a href='https://github.com/andy-iio'>github</a></p>
        </footer>
      </div>
    </body>
  );
}


export default App;