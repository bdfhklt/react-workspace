import React from 'react';
import logo from './logo.svg';
import './App.css';


// npm install react-router-dom --save
import {BrowserRouter as Router, Route} from 'react-router-dom';

// 만든 페이지
import Home from './pages/Home';
import Board from './pages/Board';
import Member from './pages/Member';

function App() {
  return (
    <Router>
      <h3>라우트 실습</h3>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/board" component={Board} />
        <Route path="/member" component={Member} />
      </div>
    </Router>
  );
}

export default App;
