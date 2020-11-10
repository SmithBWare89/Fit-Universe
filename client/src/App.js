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
import Navigation from './components/Navigation';
import Dashboard from    "./components/Dashboard"

import { state } from './utils/GlobalState';

// Actions and Reducers
import sidebarReducer from './utils/reducers/sidebar';
   


const client = new ApolloClient({
  request: (operation) => {
    console.log(operation);
    const token = localStorage.getItem("id_token");

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "http://localhost:3000/graphql",
});

function App() {
  // Redux Store
  const store = createStore(sidebarReducer, state)

  return (
    <Router>
      <ApolloProvider client={client}>
        <Provider store={store}>
          {/* <MenuSidebar />
          <Navigation className="navigation"/> */}
          <Grid>
            <Grid.Column width={16}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route component={NoMatch} />
              </Switch>
            </Grid.Column>
            {/* <Grid.Column width={2}>
                <h1>Side Menu!</h1>
              </Grid.Column> */}
          </Grid>
        </Provider>
      </ApolloProvider>
    </Router>
  );
}

export default App;
