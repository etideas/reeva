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

import AddMedia from "./pages/AddMedia";
import ShowContact from './pages/ShowContact'
import ShowCrew from './pages/ShowCrew';
import AddVideo from './pages/AddVideo';
<<<<<<< HEAD



=======
import ShowVideo from './pages/ShowVideo';
import ShowContact from "./pages/ShowContact";
import ShowCrew from "./pages/ShowCrew";
>>>>>>> 5735fd3316db51ef7beecbac3f538beca84cb941


function App() {
  return (
    <div>
       <NavBar/>
   <Routes>
  
     <Route path="/login" element={<LoginPage />} />
     <Route path="/register" element={<RegisterPage />} />
     <Route path="/add/gallery" element={<AddGallery/>} />
<<<<<<< HEAD
     <Route path="/show/contact" element={<ShowContact/>} />
=======
>>>>>>> 5735fd3316db51ef7beecbac3f538beca84cb941
    
     <Route path="/add/media" element={<AddMedia/>} />
     <Route path="/show/crew" element={<ShowCrew/>} />
     <Route path="/add/video" element={<AddVideo/>} />
<<<<<<< HEAD
    
          
=======
     <Route path="/show/video" element={<ShowVideo/>} />
     <Route path="/show/contact" element={<ShowContact/>} />
     <Route path="/show/crew" element={<ShowCrew/>} />
>>>>>>> 5735fd3316db51ef7beecbac3f538beca84cb941
   
     
   </Routes>

   </div>
  );
}

export default App;
