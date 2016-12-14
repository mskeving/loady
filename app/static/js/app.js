import React from 'react';
import ReactDOM from 'react-dom';
import { PageContainer } from './components/PageContainer';

require('scss/main.scss');

document.addEventListener('DOMContentLoaded', () => {
  const reactRoot = document.getElementById('react-root');
  ReactDOM.render(<PageContainer />, reactRoot);
});
