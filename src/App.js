import React from 'react';
import './App.css';
import Jobs from './components/Jobs'
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Jobs/>
    </Router>
  );
}

export default App;

// questions
// package.json = how does the proxy connection to the api work under the hood?
// how to do relative path in linking style sheets?
// when and when not to use React class?
// is a constructor() only used in classes or can it work in functional components?
// not sure what constructor() or super() is doing in classes
// i had to add cors to the api, why?
// react-route vs react-router-dom

