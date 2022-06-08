import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {Paginas} from './Paginas'
import './App.css';





function App() {
  return (
    <div>
      <Router>
        <Paginas/>
      </Router>
    </div>
  );
}

export default App;
