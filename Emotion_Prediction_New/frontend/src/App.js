// import { ImageUpload } from "./home";
// import HappyTails from "./happyTails";

// function App() {
//   return <HappyTails/>;
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HappyTails from "./happyTails"; // Adjust the import path
import ImageUpload from "./home"; // Adjust the import path
import Predictions from "./components/Predictions"
import Emotion from "./Emotion";
import Breed from "./Breed";
import SkinDisease from "./SkinDisease";
import Age from "./Age";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HappyTails />} /> {/* Use the 'element' prop */}
        <Route path="/upload" element={<ImageUpload />} /> {/* Use the 'element' prop */}
        <Route path="/predictions" element={<Predictions />} /> {/* Use the 'element' prop */}
        <Route path="/emotion" element={<Emotion />} /> {/* Use the 'element' prop */}
        <Route path="/breed" element={<Breed />} /> {/* Use the 'element' prop */}
        <Route path="/skinDisease" element={<SkinDisease />} /> {/* Use the 'element' prop */}
        <Route path="/age" element={<Age />} /> {/* Use the 'element' prop */}
      </Routes>
    </Router>
  );
};

export default App;
