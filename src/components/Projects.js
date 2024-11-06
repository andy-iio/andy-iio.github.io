//Projects.js
import React from 'react';
import ProjectCard from './ProjectCard';

//images:
import recipeBot from '../media/recipeBot.png';
import edgeDetection from '../media/edgeDetection.png';
import waffleBar from '../media/waffleBar.png';
import sudoku from '../media/sudoku.png';
import colloseum from '../media/ColloseumKing.png';
import Ewaste from '../media/eWaste1.png';
import egar from '../media/egar.png';
import noPhoto from '../media/photos-coming-soon.jpg';
// import skiResort from '../media/ski-resort.png';
// import flavourfulPlate from './media/flavourful-plate.png';
// import riseGrind from './media/riseAndGrind.png';
// import smartCube from './media/smartcube1.png';
// import microBreak from './media/MicroBreak.png';
// import DigitalRealm from './media/digitalRealm.png';
// import Loft from './media/loft.png';

const projectData = [
  //demoUrl, siteUrl, and codeUrl are all optional
  {
    id: 1,
    title: "Recipe Bot",
    description: "Using Python, Flask, and a postgresSQL database populated with recipes by a webscraper, this website asks a series of questions and then returns matching recipe options based on the answers.",
    image: recipeBot,
    demoUrl: "x6vwteoy-hg",
    tags: ["Python", "Flask", "PostgreSQL", "Webscraper"]
  },
  {
    id: 2,
    title: "Image Edge Detection",
    description: "Using cv2, numpy, and matplotlib, this program takes an image and detects the edges, returning a greyscale version and an outline. There is an option to adjust the detection threshold, and to change the threshold afterwards to regenerate new images.",
    image: edgeDetection,
    demoUrl: "EZ1evF_kN9s",
    tags: ["Python", "OpenCV", "NumPy", "Matplotlib"]
  },
  {
    id: 3,
    title: "Sudoku Solver",
    description: "Using Javascript, Sudoku puzzles are solved using a backtracking algorithm. It fills in empty cells by recursively trying valid choices until a solution is found.",
    image: sudoku,
    demoUrl: "4eujFyiw7vA",
    tags: ["JavaScript", "Backtracking"]
  },
  {
    id: 4,
    title: "Egar Tool & Die",
    description: "Website designed for a local Tool & Die shop",
    siteUrl:"https://www.egartool.com/",
    image: egar,
    tags: ["Web Design", "Wordpress", "PHP"]
  },
  {
    id: 5,
    title: "Colosseum King",
    description: "Command prompt based game built in C for a school project. Upgrade your skill, earn points, and fight enemies to become the Collosseum King",
    image: colloseum,
    codeUrl: "https://github.com/andy-iio/Sec1_Group3_ColosseumKing",
    tags: ["C"]
  },
  {
    id: 6,
    title: "Hackathon App",
    description: "Created a fully functional mobile app in 48 hours for the Conestoga College First Womens Hackathon. The theme was E-Waste education. More info and demo coming shortly.",
    image: noPhoto,
    tags: ["Flutter", "Dart"]
  },
  {
    id: 7,
    title: "Waffle Bar",
    description: "A simple practice website built using React and Bootstrap, designed to be responsive for various screen sizes.",
    image: waffleBar,
    codeUrl: "https://github.com/andy-iio/the-waffle-bar",
    siteUrl: "https://andy-iio.github.io/the-waffle-bar/",
    tags: ["React", "Bootstrap"]
  },

];

const Projects = ({ handleButtonClick }) => (
    <div className="container">
      <h2 className="mb-4 text-center">My Projects</h2>
      <div className="row">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} handleButtonClick={handleButtonClick} />
        ))}
      </div>
    </div>
);

export default Projects;


