import React from 'react';
import Header from "./components/Header";
import './App.css'
import Users from "./containers/Users";

const App = () => {
  return (
    <div className="app">
      <Header/>
      <Users/>
    </div>
  );
};

export default App;
