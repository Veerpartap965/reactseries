import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { App } from './App.jsx'; 
// import { Practices } from "./Practices.jsx";
// import { Veer } from './components/veer.jsx';
// import Profile from "./components/profile.jsx";
import {Basics1} from "./revision/basics1.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Practices /> */}
    {/* <Veer/> */}
    {/* <Profile /> */}
    <Basics1 />
  </StrictMode>
);
