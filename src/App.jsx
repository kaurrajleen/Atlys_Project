import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';


import './App.css';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <Routes>
  
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
