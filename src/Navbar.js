import React from 'react';
import './Navbar.css';


function Navbar() {
  return (
    <>
    <nav className="navbar">
      <div className="navbar-left">
        <h1>&lt;Moumita/&gt;</h1>
      </div>
      <div className="navbar-center">
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#about">About Me</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="navbar-right">
        {/* Resume button that opens Google Drive resume in a new tab */}
        <a
          href="https://drive.google.com/file/d/1PSeRsf91EGoFgXiZVUvRtT9gcxt6dyiC/view?usp=drive_link" // <-- Replace this with your actual Google Drive resume link
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
        >
          Resume
        </a>
      </div>
    </nav>
    <section className="new-navbar">
        <div className="new-navbar-left">
          <h1>Hello, I'm Moumita</h1>
          <p>I'm a very passionate and self-motivated Programmer specialized in the MERN Stack. I love building beautiful frontends, and I have an year of experience around that.</p>
        </div>
        <div className="new-navbar-right">
          <img src="https://media.istockphoto.com/id/1432867273/video/animated-isolated-remote-coder.jpg?s=640x640&k=20&c=h6-ueC1SJB8gB95e3RElf35WQ3nTa3L9nhyarSJmNnk=" alt="Moumita" />
        </div>
      </section>
    </>
  );
}

export default Navbar;     
