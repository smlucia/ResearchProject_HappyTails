import React from "react";
import navigateToPrediction from "../Assets/navigateToPrediction.png";
import selectCategory from "../Assets/selectCategory.png";
import uploadImage from "../Assets/uploadImage.png";

const Work = () => {
  const workInfoData = [
    {
      image: navigateToPrediction,
      title: "Navigate to Predictions",
      text: "Click  on ' GET STARTED ' button  to  navigate  to  the  Predictions  page.",
    },
    {
      image: selectCategory,
      title: "Select the Category",
      text: "From the displayed 4 categories, click on the category you need.",
    },
    {
      image: uploadImage,
      title: "Upload the Image",
      text: "Upload an image of the dog. Only one image can be uploaded at a time.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading"></p>
        <h1 className="primary-heading">How To Use</h1>
        {/* <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p> */}
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;