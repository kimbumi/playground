import {Canvas} from '@react-three/fiber'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Experience from './Experience.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Canvas>
      <Experience/>
    </Canvas>
  </React.StrictMode>
);
