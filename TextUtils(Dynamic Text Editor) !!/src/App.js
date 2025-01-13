import Navbar from './Components/Navbar.js';
import TextForm from './Components/TextForm.js';
import './App.css';
import { useState } from 'react';

function App() {
  const [Dark, setDark] = useState("light");
  const ToggleDarkAll = () => {
    console.log("Dark mode has been enabled");
    document.body.style.backgroundColor = '#212121';
    document.body.style.color = 'rgb(236, 236, 236)';
    setDark("dark");
    
  }
  const ToggleLightAll = () => {
    setDark("light");
    document.body.style.color = 'rgb(33, 37, 41)';
    document.body.style.backgroundColor = 'white';
    console.log("Light mode has been enabled");
  }
  return (
    <>
    <Navbar title="TextUtils" about="About Us"  ToggleLight = {ToggleLightAll} ToggleDark={ToggleDarkAll} />
    <div className='container my-3'>
      <TextForm text = "Enter your text" style = {Dark} />
    </div>
    </>
  );
}

export default App;
