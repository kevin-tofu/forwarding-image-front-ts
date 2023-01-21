import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import Home from './pages/Home';
import Back from './pages/Back';
import NoMatch from './pages/NoMatch';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/back" element={<Back />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
