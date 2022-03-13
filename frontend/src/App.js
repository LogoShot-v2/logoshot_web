import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from "../src/pages/Home";
import NavBar from './components/Nav';


function App() {
  return (
    <div className="App">
         <h1>Welcome to React Router!</h1>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<div>about</div>} />
      </Routes>
    </div>
  );
}

export default App;
