import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import {FirebaseProvider} from './Context/Firebase.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
    <FirebaseProvider>
    <App />
    </FirebaseProvider>
    </BrowserRouter>
  </StrictMode>,
)
