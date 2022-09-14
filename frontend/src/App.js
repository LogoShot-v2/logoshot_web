import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Box } from '@mui/material';
import Home from "../src/pages/Home";
import NavBar from './components/Nav';
import InspiringSearch from './pages/InspiringSearch';
import ImageSearch from './pages/ImageSearch';
import TextSearch from './pages/TextSearch';
import Result from './pages/Result';
import Login from './pages/Login';

function App() {
  return (
    <>
      <NavBar/>
      <Box sx={{ flexGrow: 1 }} style={{marginTop: "20px"}}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/inspiringSearch" element={<InspiringSearch/>}/>
          <Route path='/imageSearch' element={<ImageSearch/>}/>
          <Route path="/textSearch" element={<TextSearch/>}/>
          <Route path="/result" element={<Result/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Box>
    </>
  );
}

export default App;
