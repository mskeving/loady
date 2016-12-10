import React from 'react';
import ReactDOM from 'react-dom';
import { PageContainer } from './components/PageContainer';

document.addEventListener('DOMContentLoaded', () => {
  const reactRoot = document.getElementById('react-root');
  ReactDOM.render(<PageContainer />, reactRoot);
});
