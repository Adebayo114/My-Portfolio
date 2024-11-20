import React from "react";
import "../Styles/contact.css";

// Import social media socials
import whatsappIcon from "../assets/Socials/whatsapp.png";
import twitterIcon from "../assets/Socials/twitter.png";
import instagramIcon from "../assets/Socials/insta.png";
import linkedinIcon from "../assets/Socials/linkedin.png";

const Contact: React.FC = () => {
  return (
    <div className="start">
      {/* Header Section */}
      <h2 className="header">
        <div>
          Contact <span className="cd">Me</span>
        </div>
      </h2>

      {/* Social Media Section */}
      <div className="social-media">
        {/* WhatsApp */}
        <a href="https://wa.me/09076170139" target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="WhatsApp" className="social-icon" />
        </a>

        {/* Twitter */}
        <a href="https://x.com/DayoAdebay86128?t=h7AvRx7mF8_6nulbAnKgBA&s=08" target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="Twitter" className="social-icon" />
        </a>

        {/* Instagram */}
        <a href="https://www.instagram.com/dynasty_tech1?igsh=YzljYTk1ODg3Zg==" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" className="social-icon2" />
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/adebayo-oladayo-a8b491266" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
        </a>
      </div>


    </div>
  );
};

export default Contact;
