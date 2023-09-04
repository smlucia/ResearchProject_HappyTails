import React , {useState} from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/homeLogo.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

// import { ImageUpload } from "../home";

const Home = () => {
  // const [showImageUpload, setShowImageUpload] = useState(false); // State to control rendering of ImageUpload

  // const handleGetStartedClick = () => {
  //   setShowImageUpload(true); // Set the state to true when the button is clicked
  // };

  const navigate = useNavigate(); // Initialize the history object

  const handleGetStartedClick = () => {
    navigate("/predictions"); // Navigate to the "/upload" route
  };

  return (
    <div className="home-container">
      {/* <Navbar /> */}
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading-home">
            Happy Tails
          </h1>
          <p className="primary-text">
          " Unlocking the Future of Companionship, One Tail at a Time "
          </p>
          <button className="secondary-button" onClick={handleGetStartedClick}>
            GET STARTED <FiArrowRight />{" "}
          </button>
          {/* {showImageUpload ? (
          <ImageUpload /> // Render ImageUpload when showImageUpload is true
        ) : (
          <button
            className="secondary-button"
            // onClick={handleGetStartedClick}
          >
            GET STARTED <FiArrowRight />{" "}
          </button> */}
        {/* )} */}
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" className="happyTailsIcon"/>
        </div>
      </div>
    </div>
  );
};

export default Home;