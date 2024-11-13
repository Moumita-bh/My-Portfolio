import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './ContactNavbar.css';

const ContactNavbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="contact-container">
      <h2>Contact</h2>
      <p>
        If you are a recruiter looking for a passionate Frontend Engineer, please feel free to contact me.
        You can reach out to me on the following:
      </p>
      <div className="contact-icons">
        <a href="https://github.com/Moumita-bh" target="_blank" rel="noopener noreferrer">
          <FaGithub className="contact-icon" />
        </a>
        <a href="https://www.linkedin.com/in/moumita-bhattacharjee-4338712b4" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="contact-icon" />
        </a>
        <button onClick={openModal} className="contact-icon-button">
          <FaEnvelope className="contact-icon" />
        </button>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Email: mou.bhattacharjeek99@gmail.com</h3>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactNavbar;
