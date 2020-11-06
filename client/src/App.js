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
   


const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
});

function App() {
  // Redux Store
  const store = createStore(sidebarReducer, {
    visible: false
  })

  return (
    <Router>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Grid>
            {/* <Grid.Column width={16} style={{ backgroundColor: "#91AEC1" }}>
             
              <h1 color="white">Fit Universe</h1>
               
            </Grid.Column>  */}
            <Grid.Column
               width={16}
              style={{  height: "100%"}}
            >
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />

                <Route component={NoMatch} />
              </Switch>
            </Grid.Column>
            {/* <Grid.Column width={2} style={{ backgroundColor: "#508CA4" }}>
              <h1>Side Menu!</h1>
            </Grid.Column> */}
          </Grid>
        </Provider>
      </ApolloProvider>
    </Router>
  );
}

export default App;
