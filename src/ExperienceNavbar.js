import React from 'react';
import './ExperienceNavbar.css';

function ExperienceNavbar() {
  return (
    <div className="experience-navbar">
      <h2 className="experience-heading">Experience</h2>
      <div className="experience-content">
        {/* Left Side - Dazzelect */}
        <div className="experience-column">
          <h3>Dazzelect</h3>
          <p>Dazzlelect is a leading IT Solution company which is committed for providing exceptional quality of HR & Training services for individuals and our esteemed partners.</p>
          <h4>Digital Marketing Intern</h4>
          <p>June 2023 - September 2023</p>
          <p>I assists in executing online marketing campaigns, managing social media accounts, creating content, analyzing metrics, and supporting various digital strategies to enhance brand visibility and engagement.</p>
        </div>

        {/* Right Side - Hansoftech */}
        <div className="experience-column">
          <h3>Hansoftech</h3>
          <p>Hansoftech is a performance driven team of creative and dedicated technical and marketing professionals focusing on Web based development, Search Engine Optimisation (SEO) and Digital Marketing.</p>
          <h4>Deal Editor</h4>
          <p>November 2023-present</p>
          <p>I am responsible for identifying, curating, and publishing attractive deals and discounts, ensuring accuracy, relevance, and timely updates to attract and engage users.</p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceNavbar;
