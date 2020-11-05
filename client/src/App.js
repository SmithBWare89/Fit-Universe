import React, { useEffect } from "react";
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import { Grid, Container } from 'semantic-ui-react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";

//Components
import Header from "../src/components/Header";
import MenuSidebar from '../src/components/MenuSidebar';

// Actions and Reducers
import sidebarReducer from './utils/reducers/sidebar';


function App() {
  // Redux Store
  const store = createStore(sidebarReducer, {
    visible: false
  })

  return (
    <Router>
        <Provider store={store}>
          <MenuSidebar />
          <Grid>
            <Grid.Column width={16} style={{backgroundColor: 'yellow'}}>
                <h1>Nav Bar</h1>
            </Grid.Column>
              <Grid.Column width={14} style={{backgroundColor: 'red', height: '100%'}}>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/signup" component={Signup} />

                  <Route component={NoMatch} />
                </Switch>
              </Grid.Column>
              <Grid.Column width={2} style={{backgroundColor: 'blue'}}>
                <h1>Side Menu!</h1>
              </Grid.Column>
          </Grid>
        </Provider>
    </Router>
  );
}

export default App;
