import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {Paginas} from './Paginas'
import {Header} from './header/Header';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Paginas/>
      </Router>
    </div>
  );
}

export default App;
