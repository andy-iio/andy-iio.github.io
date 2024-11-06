import React from 'react';

const Navbar = ({ isNavbarOpen, handleNavbarToggle, handleLinkClick }) => {

  return (
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
  );
};

export default Navbar;



// import React, {useState} from 'react';

// const [isNavbarOpen, setIsNavbarOpen] = useState(false);

// const handleNavbarToggle = () => {
//   setIsNavbarOpen(!isNavbarOpen);
// };

// const handleLinkClick = () => {
//   setIsNavbarOpen(false);
// };

// const Navbar = ({ isNavbarOpen, HandleNavbarToggle, handleLinkClick}) => (
//     <div className='nav-container'>
//     <nav className="navbar navbar-expand-lg navbar-light fixed-top container">
//       <a className="navbar-brand mx-5" href="#">
//         My Portfolio
//       </a>
//       <button
//         className="navbar-toggler"
//         type="button"
//         onClick={handleNavbarToggle}
//         aria-controls="navbarNav"
//         aria-expanded={isNavbarOpen}
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div
//         className={`collapse navbar-collapse justify-content-end mx-5 ${isNavbarOpen ? 'show' : ''}`}
//         id="navbarNav"
//       >
//         <ul className="navbar-nav text-center">
//           {['About', 'Projects', 'Resume', 'Contact'].map((item, index) => (
//             <li className="nav-item mx-2" key={index}>
//               <a className="nav-link" href={`#${item.toLowerCase()}`} onClick={handleLinkClick}>
//                 {item}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   </div>
// );

// export default Navbar;