import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Button from "react-bootstrap/Button";
//components
import NavBar from "./components/Navbar";

//pages
import RegisterPage from "./pages/Register";
import LoginPage from './pages/Login'
import AddGallery from "./pages/AddGallery";
import ShowGallery from "./pages/showGallery";
import AddMedia from "./pages/AddMedia";
import ShowMedia from './pages/ShowMedia';
import AddVideo from './pages/AddVideo';
import ShowVideo from './pages/ShowVideo';


function App() {
  return (
    <div>
       <NavBar/>
   <Routes>
  
     <Route path="/" element={<h1>Home</h1>} />
     <Route path="/login" element={<LoginPage />} />
     <Route path="/register" element={<RegisterPage />} />
     <Route path="/add/gallery" element={<AddGallery/>} />
     <Route path="/show/gallery" element={<ShowGallery/>} />
     <Route path="/add/media" element={<AddMedia/>} />
     <Route path="/show/media" element={<ShowMedia/>} />
     <Route path="/add/video" element={<AddVideo/>} />
     <Route path="/show/video" element={<ShowVideo/>} />
   
     
   </Routes>

   </div>
  );
}

export default App;
