import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import './ProfileNavbar.css'; // Custom styling
import profileImage from './images/ProfileImage.png';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-image">
        <img src={profileImage} alt="Moumita Bhattacharjee" className="profile-image" />
      </div>
      <div className="profile-details">
        <h1>Moumita Bhattacharjee</h1>
        <div className="profile-location">
          <FaMapMarkerAlt /> <span>Assam, India</span>
        </div>
        <div className="profile-phone">
          <FaPhoneAlt /> <span>+91 8011674049</span>
        </div>
        <p>
          I am a very passionate Full Stack Engineer skilled in frontend development.
          I specialize in frontend and am looking for an opportunity to apply my knowledge and skills
          to be a valuable asset for an organization and grow professionally. Although I don't have
          formal education in coding, my passion for it is my unique strength.
        </p>
      </div>

      
    </div>
  );
};

export default Profile;