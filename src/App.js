import React from 'react';
import NavBar from './components/navbar/navbar';
import Home from './pages/home/home';
import './assets/css/App.css';

function App() {
  let minHeight = window.innerHeight;
  return (
    <div className="app" style={{minHeight: minHeight}}>
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
