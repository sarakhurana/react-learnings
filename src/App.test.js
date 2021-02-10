import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StateProvider } from './context/Context';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StateProvider><App /></StateProvider>, div);
});
