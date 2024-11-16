import "./App.css";
import Navbar from "./components/Navbar2";
import Motion from "./components/Motion2";
import GalleryPage from "./components/GalleryPage";
import Contact from "./components/Contact";
// import Footer from "../../Footer";
import MediaCoverage from "./components/MediaCoverage";
import YouTube from "./components/Youtube";
import CrewForm from "./components/CrewForm";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Motion />
      <GalleryPage />
      <YouTube />
      <Contact />
      <MediaCoverage />
      <CrewForm />

      {/* <Footer /> */}
    </div>
  );
}

export default App;
