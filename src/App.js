import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './Pages/Home';
import ProfilePage from './Pages/Profile';
import CounterPage from './Pages/Counter';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/home" component={HomePage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/counter" component={CounterPage} />
      </Router>
    </div>
  );
}

export default App;
