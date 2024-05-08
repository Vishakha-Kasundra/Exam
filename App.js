// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/About">About</Link>
                </li>
              </ul>
            </nav>
            <hr></hr>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
