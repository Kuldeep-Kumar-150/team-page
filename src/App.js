import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Choose from "./components/Choose";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Works from "./components/Works";

function App() {
  return <>
    <NavBar />
    <HeroSection />
    <Works />
    <Choose/>
  </>;
}

export default App;
