import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/navtab";
import Home from "./components/home";

function App() {
  return (
    <Router>
      <header>
        <NavTabs />
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/add" component={Add} /> */}
      </header>
    </Router>
  );
}

export default App;
