import React from 'react';
import { Link } from 'react-router-dom';

function NoMatch() {
  return (
    <div style={{ padding: 20 }}>
      <h2>404 - Page Not Found</h2>
      <p>The page you requested does not exist.</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

export default NoMatch;
