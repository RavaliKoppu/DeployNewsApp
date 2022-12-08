import './App.css';
import News from './Components/News';
import NavBar from './Components/NavBar';
import React from 'react'
import {
  BrowserRouter ,Routes,Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/" element={<News apiKey="0acfa1f0af8149c6aa4bb005a0537224" key="general" pageSize={10} country="in" category="general"></News>}/>
      <Route path="/business" element={<News apiKey="0acfa1f0af8149c6aa4bb005a0537224" key="business" pageSize={10} country="in" category="business"></News>}/>
      <Route path="/entertainment"element={<News apiKey="0acfa1f0af8149c6aa4bb005a0537224"  key="entertainment" pageSize={10} country="in" category="entertainment"></News>}/>
      <Route path="/general"element={<News apiKey="0acfa1f0af8149c6aa4bb005a0537224"  key="general" pageSize={10} country="in" category="general"></News>}/>
      <Route path="/health"element={<News apiKey="0acfa1f0af8149c6aa4bb005a0537224"  key="health" pageSize={10} country="in" category="health"></News>}/>
      <Route path="/science"element={<News apiKey="0acfa1f0af8149c6aa4bb005a0537224"  key="science" pageSize={10} country="in" category="science"></News>}/>
      <Route path="/sports"element={<News apiKey="0acfa1f0af8149c6aa4bb005a0537224"  key="sports" pageSize={10} country="in" category="sports"></News>}/>
      <Route path="/technology"element={<News apiKey="0acfa1f0af8149c6aa4bb005a0537224"  key="technology" pageSize={10} country="in" category="technology"></News>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
