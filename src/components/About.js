// components/About.js
import React from 'react';

const About = () => (

    <div className="container">
        <div className="about-overlay">
          <h2 className="section-title">About Me</h2>
         <p className="section-description">
            Hi! I'm Andy, a 2nd year computer science student who loves creating projects and learning new programming tools and languages.
          </p>
          <p className="section-description">
            I am currently learning <mark>Flutter and Dart,</mark> and have solid foundation in multiple programming languages and frameworks including <mark>C, C++, Python, and VBA.</mark> </p>
            <p>I also have practice with web development technogies like <mark>Bootstrap, Flask, and React,</mark> as well as <mark>HTML, CSS, and JavaScript.</mark>
          </p>
          <p className="section-description">
            Thanks for taking the time to visit my portfolio website! Check out some of my projects below!
          </p>
          <p>I created this site myself, with <mark>React!</mark> See the code for it over on my {}
            <a 
            href="https://github.com/andy-iio/andy-iio.github.io" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="link-warning hover:underline"
            >
            github
            </a>
            .  
          </p> 
        </div>
      </div>
);

export default About;
