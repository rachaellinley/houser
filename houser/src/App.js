import React from 'react';
import { HashRouter as Router } from "react-router-dom";
import './App.css';
import Header from "./Components/Header";
import routes from './routes';


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">

        <Header />
        {routes}
      </header>
    </div>
    </Router>
  );
}

export default App;
