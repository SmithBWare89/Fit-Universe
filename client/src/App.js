
import React from "react";
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import './App.css';

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";

//Components
import Header from "../src/components/Header";


function App() {
  return (
    <Router>
      <div>
      

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />

          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
