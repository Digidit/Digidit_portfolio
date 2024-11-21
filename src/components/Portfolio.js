import React from 'react';

const Portfolio = () => {
  const projects = [
    { id: 1, title: 'Project 1', description: 'Video editing demo', link: '#' },
    { id: 2, title: 'Project 2', description: 'Motion graphics sample', link: '#' },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">My Work</h2>
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.link} className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
