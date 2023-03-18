import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Homepage from "./pages/homepage";
import Navigationbar from "./components/Navigationbar";
import { Canvas } from '@react-three/fiber'
import Model from "./components/model";
import { OrbitControls } from '@react-three/drei'
import './App.css'
import tinycolor from 'tinycolor2';
import { useState } from 'react';
import { ChromePicker } from 'react-color';



function App() {

  const [color, setColor] = useState('#F69CC7');
  const [complementaryColor, setComplementaryColor] = useState('#ff5050');
  //selecting body
  const body = document.getElementsByTagName('body');
  const handleColorChange = (color) => {
    setColor(color.hex);
    setComplementaryColor(tinycolor(color.hex).complement().toHexString());
  };

  return (
    <div id="bgcolor" style={{backgroundColor:`${color}`}}>
      <Navigationbar />

      <div id="colorPicker">
        <ChromePicker color={color} onChangeComplete={handleColorChange} />
      </div>

      <div  style={{width:"100vw", height:"100vh"}}>
        <Canvas className="canvas">
            <Model />
            <ambientLight intensity={0.3} />
            <directionalLight className="changColor" color={color} position={[10, 5, 5]} />
            <OrbitControls/>
        </Canvas>
      </div>
      

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/homepage" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
