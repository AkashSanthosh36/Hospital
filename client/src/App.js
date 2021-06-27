import React from 'react';
import './App.css';

import Navbar from './components/Navbar'
import Admin from './components/Admin'
import AdminFunctions from './components/AdminFunctions'
import AddDoctor from './components/AddDoctor'

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <AddDoctor /> */}
      {/* <Admin /> */}
      <AdminFunctions />
    </div>
  );
}

export default App;
