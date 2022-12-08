import './App.css';
import News from './Components/News';
import NavBar from './Components/NavBar';
import React from 'react'
import {
  BrowserRouter ,Routes,Route
} from "react-router-dom";

function App() {
  const apiKey='0acfa1f0af8149c6aa4bb005a0537224';
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/" element={<News apiKey={apiKey} key="general" pageSize={10} country="in" category="general"></News>}/>
      <Route path="/business" element={<News apiKey={apiKey} key="business" pageSize={10} country="in" category="business"></News>}/>
      <Route path="/entertainment"element={<News apiKey={apiKey}  key="entertainment" pageSize={10} country="in" category="entertainment"></News>}/>
      <Route path="/general"element={<News apiKey={apiKey}  key="general" pageSize={10} country="in" category="general"></News>}/>
      <Route path="/health"element={<News apiKey={apiKey}  key="health" pageSize={10} country="in" category="health"></News>}/>
      <Route path="/science"element={<News apiKey={apiKey}  key="science" pageSize={10} country="in" category="science"></News>}/>
      <Route path="/sports"element={<News apiKey={apiKey}  key="sports" pageSize={10} country="in" category="sports"></News>}/>
      <Route path="/technology"element={<News apiKey={apiKey}  key="technology" pageSize={10} country="in" category="technology"></News>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
