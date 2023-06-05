import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './pages/index/Index';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<><Index/></>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
