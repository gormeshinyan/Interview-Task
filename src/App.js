import React,{useState} from 'react';
import logo from './logo.svg'

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/index';
import Register from './components/Register/index';

function App() {
  const [details, setDetails] = useState({ name: '' , email: '' });
  const [avatar,setAvatar] = useState(logo);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home
            avatar={avatar}
            setAvatar={setAvatar}
            details={details}
            setDetails={setDetails}
          />
        </Route>
        <Route path="/register">
          <Register
            avatar={avatar}
            details={details}
          />
        </Route>
      </Switch>
  </Router>
);
}
 

export default App;
