import React from 'react'
import Sample from './components/Sample';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sample />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
