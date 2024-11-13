import React from 'react';
import './SkillNavbar.css'; // Import the SkillNavbar styles

function SkillNavbar() {
  return (
    <div className="skill-navbar">
      <h2>Skill</h2>
      <div className="skill-images">
        <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png" alt="Skill 1" />
        <img src="https://external-preview.redd.it/dynamic-shape-generator-interactive-shapes-on-canvas-v0-3QdEt0zz21-QTD2TB0TUbcl0qpt0RRqvrOQU9hGrAEk.jpg?auto=webp&s=f27b851e6387ae74f25776759ebfdc1b58963681" alt="Skill 2" />
        <img src="https://www.pngkey.com/png/detail/550-5509803_js-logo-javascript-logo-circle-png.png" alt="Skill 3" />
        <img src="https://www.pngitem.com/pimgs/m/162-1628140_react-js-hd-png-download.png" alt="Skill 4" />
      </div>
    </div>
  );
}

export default SkillNavbar;  