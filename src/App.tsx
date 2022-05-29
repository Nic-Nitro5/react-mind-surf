import React, {SyntheticEvent, useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';

function App() {
  const [name, setName] = useState('');

    useEffect(() => {
        (
            async () => {
      debugger
                const response = await fetch('http://localhost:8000/api/user', {
                    method: 'GET',
                    headers: {'Content-Type': 'application/json'},
                    credentials: 'include'
                });

                const content = await response.json();

                if(content.message === 'unauthorized'){
                  setName('');
                }else{
                  setName(content.name);
                }
            }
        )();
    });

  return (
    <div className="App">      
      <BrowserRouter>
        <Navbar name={name} setName={setName} />
        <Routes>        
          <Route path="/" element={<Home name={name} />} /> 
          <Route path="/login" element={<Login setName={setName} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
