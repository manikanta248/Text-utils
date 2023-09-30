/* eslint-disable no-unused-vars */
import  React,{ useState } from 'react'
import ReactDOM from 'react-dom/client'
import Navbarr from './assets/Navbar.jsx'
import About from './assets/About.jsx'
import Textspace from './assets/Textspace.jsx'
import './index.css'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

export default function App() {
  const [mode,modeTo]=useState('light');  
      
    
      const  changeMode=()=>{
        if(mode==='light'){
          modeTo('dark');
          document.body.style.backgroundColor='gray';
          
          document.body.style.color='white';
          //showalert("Dark mode has been enabled","success");
        }
        else{
          modeTo('light');
          document.body.style.backgroundColor='white';
          //document.body.style.color='black';
          //showalert("Light mode has been enabled","success");
    
        }
    
      
      }
  return (
    <BrowserRouter>
    <Navbarr mode={mode} changeMode={changeMode}/>
      <Routes>
      <Route path="/about" element={<About />}  />
      <Route path="/" element={<Textspace  heading="ENTER TEXT TO ANALYZE" mode={mode}/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)

  

