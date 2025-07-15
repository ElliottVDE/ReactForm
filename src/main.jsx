import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './Form';

const mountNode = document.getElementById('interest-form');
if (mountNode) {
  const root = ReactDOM.createRoot(mountNode);
  root.render(<Form />);
}