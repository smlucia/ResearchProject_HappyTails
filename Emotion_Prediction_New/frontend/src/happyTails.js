import "./happyTails.css";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Additional from "./components/Additional";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function happyTails() {
    return (
        <div className="App">
            <Home />
            <About />
            <Work />
            {/* <Additional />
            <Contact /> */}
            <Footer />
        </div>
    );
}

export default happyTails;
