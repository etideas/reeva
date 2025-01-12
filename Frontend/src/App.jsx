import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Motion from "./components/Motion";
import GalleryPage from "./components/GalleryPage";
import Contact from "./components/Contact";
import MediaCoverage from "./components/MediaCoverage";
import YouTube from "./components/Youtube";
import CrewForm from "./components/CrewForm";
import BlogPage from "./components/BlogPage";
import TipsTricks from "./components/TipsTricks";

function App() {
  return (
    <Router>
      <div className="App bg-[url('./assets/bg5.gif')] bg-no-repeat bg-cover">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home">
                  <Motion />
                </section>
                <section id="gallery">
                  <GalleryPage />
                </section>
                <section id="youtube">
                  <YouTube />
                </section>
                <section id="media">
                  <MediaCoverage />
                </section>
                <section id="contact">
                  <Contact />
                </section>
              </>
            }
          />
          <Route
            path="/crewform"
            element={<CrewForm />}
          />
          <Route
            path="/blog"
            element={<BlogPage />}
          />
          <Route
            path="/tips"
            element={<TipsTricks />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
