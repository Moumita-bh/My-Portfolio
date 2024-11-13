import React from 'react';
import './ProjectNavbar.css'; // Import the ProjectNavbar styles
import project1 from './images/Project1.png';
import project2 from './images/Project2.png';

function ProjectNavbar() {
  return (
    <div className="project-navbar">
      <h2>Projects</h2>
      <div className="project-cards">
        {/* Project Card 1 */}
        <div className="project-card">
          <img src={project1} alt="Project 1" className="project-image" />
          <h3>
            React Clone of 1mg{' '}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="React Logo"
              className="react-logo"
            />
          </h3>
          <p>
            This is the React Clone of the Health care Platform Tata 1mg. This
            is a React website where I have used React and Material UI in Front
            End. The Frontend is deployed in Vercel.
          </p>
          <div className="project-buttons">
            <a
              href="https://github.com/Moumita-bh/construct-week-2nd/tree/main/tata-1mg/react-tata-1mg"
              target="_blank"
              rel="noopener noreferrer"
              className="button github-button"
            >
              GitHub
            </a>
            <a
              href="https://construct-week-2nd-wcw3.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="button website-button"
            >
              Website
            </a>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="project-card">
          <img src={project2} alt="Project 2" className="project-image" />
          <h3>
            Travel Destination App{' '}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="React Logo"
              className="react-logo"
            />
          </h3>
          <p>This is the Travel Destination App. It showcases the use of React and other technologies.</p>
          <div className="project-buttons">
            <a
              href="https://github.com/Moumita-bh/travel-destination-app"
              target="_blank"
              rel="noopener noreferrer"
              className="button github-button"
            >
              GitHub
            </a>
            <a
              href="https://travel-destination-app-eight.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="button website-button"
            >
              Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectNavbar;
