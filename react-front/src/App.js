import React from 'react';
import {Router} from "react-router-dom";
import {Paginas} from './Paginas'
import {Header} from "./header/Header";

import './App.css';

function App() {
  return (
    //<div><Header/></div>
    <div>
      <Router>
        <div><Header/></div>
        
        <Paginas/>
      </Router>
    </div>
  );
}

export default App;
