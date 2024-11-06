import React from 'react';

const Header = () => {

    return (
        <header className="main center-text-vertical jumbotron jumbotron-fluid">
            <div className="overlay container-fluid d-flex align-items-center justify-content-center text-center">
                <div className="position-relative">
                    <h1 className="display-4">
                        <span>Hi, I'm</span>
                        {/* ANIMATION */}
                        <svg>
                            <text x="50%" y="60%" text-anchor="middle" className='andyText'>
                                ANDY
                            </text>
                        </svg>
                    </h1>
                    {/* <p className="lead">Computer Science Student</p> */}
                    <div>
                        <a href='#projects' className='mx-1 btn btn-light text-dark btn-hover'>See My Work</a>
                        <a href='#contact' className='mx-1 btn btn-light text-dark btn-hover'>Get In Touch</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;





