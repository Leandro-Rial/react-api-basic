import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import PostsList from './components/pages/Posts/PostsList';
import './Scss/styled.scss';

function App() {
  return (
    <Router>
      <PostsList />
    </Router>
  );
}

export default App;
