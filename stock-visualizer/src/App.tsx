import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {MainLayout} from './components/views/MainLayout'
import './App.css';

const App: FC = () => {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
};

export default App;
