import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Motion from "./components/Motion2";
import GalleryPage from "./components/GalleryPage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MediaCoverage from "./components/MediaCoverage";
import Login from "./components/Login";
import YouTube from "./components/Youtube";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <div className="content">
        <Switch>
          <Route
            exact
            path="/"
            component={Motion}
          />

          <Route
            path="/gallery"
            component={GalleryPage}
          />

          <Route
            path="/youtube"
            component={YouTube}
          />

          <Route
            path="/contact"
            component={Contact}
          />

          <Route
            path="/media"
            component={MediaCoverage}
          />

          <Route
            path="/adminlogin"
            component={Login}
          />

          {/* Add more routes here as needed */}
        </Switch>
      </div>
      <div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

