import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import Home from './Home';
import Register from './Register';
import Login from './Login';
import Materials from './Materials';
import UploadMaterials from './UploadMaterials';
import Payment from './Payment';
import Contact from './Contact';
import About from './About';
import NoMatch from './NoMatch';

// Simple fake auth for demonstration
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

function App() {
  const [user, setUser] = useState(null);

  const login = (username, cb) => {
    fakeAuth.authenticate(() => {
      setUser(username);
      cb();
    });
  };

  const logout = (cb) => {
    fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return (
    <Router>
      <div>
        <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
          <Link to="/" style={{ marginRight: 10 }}>Home</Link>
          <Link to="/materials" style={{ marginRight: 10 }}>Materials</Link>
          <Link to="/upload" style={{ marginRight: 10 }}>Upload Materials</Link>
          <Link to="/payment" style={{ marginRight: 10 }}>Payment</Link>
          <Link to="/contact" style={{ marginRight: 10 }}>Contact</Link>
          <Link to="/about" style={{ marginRight: 10 }}>About</Link>
          {!user ? (
            <>
              <Link to="/login" style={{ marginRight: 10 }}>Login</Link>
              <Link to="/register" style={{ marginRight: 10 }}>Register</Link>
            </>
          ) : (
            <button onClick={() => logout(() => {})}>Logout ({user})</button>
          )}
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login onLogin={login} />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/upload" element={<UploadMaterials user={user} />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
