import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import Breed from "../Assets/predictionDogBreeds.png";
import Age from "../Assets/predictionDogAge.png";
import Emotion from "../Assets/predictionDogEmotion.png";
import SkinDisease from "../Assets/predictionDogSkin.png";

const Predictions = () => {
  const navigate = useNavigate(); // Initialize the history object

  const handleEmotion = () => {
    navigate("/emotion"); // Navigate to the "/emotion" route
  };

  const handleBreed = () => {
    navigate("/breed"); // Navigate to the "/breed" route
  };

  const handleSkinDisease = () => {
    navigate("/skinDisease"); // Navigate to the "/skinDisease" route
  };

  const handleAge = () => {
    navigate("/age"); // Navigate to the "/age" route
  };

  return (
    <div className="prediction-page"> <h1 className="prediction-heading-home">Let's Predict</h1>
      <div className="prediction-section-bottom">
        <div className="prediction-card">
          <Card style={{ width: '18rem' }}>
            <Card.Header
              style={{ marginBottom: '70px' }}
              className="prediction-card-header">Breed</Card.Header>
            <Card.Img variant="top" src={Breed} />
            <Card.Body>
              {/* <Card.Title>Breed</Card.Title> */}
              <Card.Text style={{ marginTop: '30px' }}>
              Here it has the capability to predict a total of 93 distinct dog breeds.
              </Card.Text>
              <Button
                variant="primary"
                style={{ marginTop: '30px', marginLeft: '30px' }}
                onClick={handleBreed}
                className="prediction-page-button" >
                TRY &nbsp;&nbsp;IT&nbsp;&nbsp; OUT
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className="prediction-card">
          <Card style={{ width: '18rem' }}>
            <Card.Header
              style={{ marginBottom: '-10px' }}
              className="prediction-card-header">Age</Card.Header>
            <Card.Img variant="top" src={Age} style={{ marginTop: '30px' }}/>
            <Card.Body>
              {/* <Card.Title>Age</Card.Title> */}
              <Card.Text style={{ marginTop: '20px' }}>
              Here it has the capability to predict 3 age categories of dogs.
              </Card.Text>
              <Button
                variant="primary"
                style={{ marginTop: '60px', marginLeft: '30px' }}
                onClick={handleAge}
                className="prediction-page-button" >
                TRY &nbsp;&nbsp;IT&nbsp;&nbsp; OUT
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className="prediction-card">
          <Card style={{ width: '18rem' }}>
            <Card.Header
              style={{ marginBottom: '10px' }}
              className="prediction-card-header">Emotion</Card.Header>
            <Card.Img variant="top" src={Emotion} style={{ marginTop: '20px' }} />
            <Card.Body>
              {/* <Card.Title>Emotion</Card.Title> */}
              <Card.Text style={{ marginTop: '20px' }}>
              Here it has the capability to predict 4 different emotions of dogs.
              </Card.Text>
              <Button
                variant="primary"
                style={{ marginTop: '40px', marginLeft: '30px' }}
                onClick={handleEmotion}
                className="prediction-page-button" >
                TRY &nbsp;&nbsp;IT&nbsp;&nbsp; OUT
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className="prediction-card">
          <Card style={{ width: '18rem' }}>
            <Card.Header
              style={{ marginBottom: '30px' }}
              className="prediction-card-header">Skin Disease</Card.Header>
            <Card.Img variant="top" src={SkinDisease} style={{ marginTop: '20px' }} />
            <Card.Body>
              {/* <Card.Title>Skin Disease</Card.Title> */}
              <Card.Text style={{ marginTop: '15px' }}>
              Here it has the capability to predict 7 different types of skin diseases of dogs.
              </Card.Text>
              <Button
                variant="primary"
                style={{ marginTop: '40px', marginLeft: '30px' }}
                onClick={handleSkinDisease}
                className="prediction-page-button" >
                TRY &nbsp;&nbsp;IT&nbsp;&nbsp; OUT
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Predictions;



