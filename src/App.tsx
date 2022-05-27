import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
    </div>
  );
}

export default App;
