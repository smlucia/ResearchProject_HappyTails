import React from "react";
import AboutBackground from "../Assets/about-backgroundOld.png";
import AboutBackgroundImage from "../Assets/aboutImage.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" className="aboutIcon"/>
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; Happy Tails
        </h1>
        <p className="primary-text">
        Happy Tails utilizes advanced technology to predict dog's breed, 
        emotions, skin diseases, and age.
        </p>
        <p className="primary-text">
        We are a shelter that fosters care and love for dogs, 
        fostering stronger relationships and fostering a brighter future for dogs and their families.
        </p>
        {/* <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default About;