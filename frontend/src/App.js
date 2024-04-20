import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Feed from './components/Feed';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import Navigation from './components/Navigation';


function App() {
  return (
    <Router>
      <Navigation />
      <Route path="/discover" component={Feed} />
      <Route path="/home" component={Feed} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Router>
  );
}

export default App;