// import reactLogo from './assets/react.svg'
import './App.css'
import Home from './pages/Home';
import Back from './pages/Back';
import DestinationResult from './pages/DestinationResult';
import NoMatch from './pages/NoMatch';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/succeeded" element={<DestinationResult to='/' comment='succeeded'/>} />
          <Route path="/failed" element={<DestinationResult to='/' comment='failed'/>} />
          <Route path="/back" element={<Back />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
