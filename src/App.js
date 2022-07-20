import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Generate from './components/Generate';

function App() {
  return (
    <div className="App">
      <Header />
      <Generate />
    </div>
  );
}

export default App;
