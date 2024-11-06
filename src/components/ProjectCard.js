import React from 'react';

const ProjectCard = ({ project, handleButtonClick }) => {

  return(
  <div className="col-lg-4 col-md-6 mb-4">
    <div className="card h-100 d-flex flex-column align-items-center">
      <img src={project.image} className="image card-img-top p-3" alt={project.title} />
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <div>
        {project.tags.map((tag, index) => (
          <span key={index} className="tag badge me-2 py-1 px-2">
            {tag}
          </span>
        ))}
        </div>
        <p className="card-text">{project.description}</p>
      </div>

      <div className='row justify-content-center mb-3'>
        {project.demoUrl && (
          <div className='col-auto'>
            <a className='btn btn-dark' onClick={() => handleButtonClick(project.demoUrl)}>
              See Demo
            </a>
          </div>
        )}
        {project.siteUrl && (
          <div className='col-auto'>
            <a className='btn btn-dark' href={project.siteUrl}>
              Visit Site
            </a>
          </div>
        )}
        {project.codeUrl && (
          <div className='col-auto'>
            <a className='btn btn-dark' href={project.codeUrl}>
              See Code
            </a>
          </div>
        )}
      </div>
    </div>
  </div>
  );
};

export default ProjectCard;











//  //ProjectCard.js
//  import React, { useState } from 'react';

//  const ProjectCard = ({ project, handleButtonClick }) => {
//    const [sortByTag, setSortByTag] = useState('');
 
//    const handleSortByTag = (tag) => {
//      setSortByTag(tag);
//    };
 
//    return (
//      <div className="col-lg-4 col-md-6 mb-4">
//        <div className="card h-100 d-flex flex-column">
//          <img src={project.image} className="card-img-top p-3" alt={project.title} />
//          <div className="card-body">
//            <h5 className="card-title">{project.title}</h5>
//            <p className="card-text">{project.description}</p>
//            <div className="d-flex flex-wrap mb-2">
//              {project.tags.map((tag, index) => (
//                <span
//                  key={index}
//                  className={`badge bg-primary me-2 mb-2 ${sortByTag === tag ? 'active' : ''}`}
//                  onClick={() => handleSortByTag(tag)}
//                  style={{ cursor: 'pointer' }}
//                >
//                  {tag}
//                </span>
//              ))}
//            </div>
//          </div>
//          <div className="row justify-content-center mb-3">
//            {project.demoUrl && (
//              <div className="col-auto">
//                <a className="btn btn-dark" onClick={() => handleButtonClick(project.demoUrl)}>
//                  See Demo
//                </a>
//              </div>
//            )}
//            {project.siteUrl && (
//              <div className="col-auto">
//                <a className="btn btn-dark" href={project.siteUrl}>
//                  Visit Site
//                </a>
//              </div>
//            )}
//            {project.codeUrl && (
//              <div className="col-auto">
//                <a className="btn btn-dark" href={project.codeUrl}>
//                  See Code
//                </a>
//              </div>
//            )}
//          </div>
//        </div>
//      </div>
//    );
//  };
 
//  export default ProjectCard;