import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Classes from './Classes';
import Notes from './Notes';
import Profile from './Profile';

const NavBar = () => {
  return (
    <Router>
      <div>
        <nav style={{ background: '#333', padding: '20px 40px', textAlign: 'center' }}>
          <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
            <h1 style={{ display: 'inline', marginRight: '50px', color: 'white' }}><strong>NOTATE</strong></h1>
            <li style={{ display: 'inline', marginRight: '50px' }}>
              <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>TASKS</Link>
            </li>
            <li style={{ display: 'inline', marginRight: '50px' }}>
              <Link to="/classes" style={{ textDecoration: 'none', color: 'white' }}>CLASSES</Link>
            </li>
            <li style={{ display: 'inline', marginRight: '50px' }}>
              <Link to="/notes" style={{ textDecoration: 'none', color: 'white' }}>NOTES</Link>
            </li>
            <li style={{ display: 'inline', marginRight: '10px' }}>
              <Link to="/profile" style={{ textDecoration: 'none', color: 'white' }}>PROFILE</Link>
            </li>
            
          </ul>
        </nav>

        <hr />
        <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/classes" component={Classes} />
        <Route path="/notes" component={Notes} />
        <Route path="/profile" component={Profile} />
        </Routes>
      </div>
    </Router>
  );
};

export default NavBar;
