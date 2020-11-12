import React from "react";
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import Auth from './utils/auth';

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import Workout from './pages/Workout';

//Components
import MenuSidebar from '../src/components/MenuSidebar';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';

// Actions and Reducers
import sidebarReducer from './utils/reducers/sidebar';
import strengthMovementsReducer from './utils/reducers/strengthMovements';
import errorModalReducer from './utils/reducers/errorModal';

const rootReducer = combineReducers({
  sidebarReducer,
  strengthMovementsReducer,
  errorModalReducer
})

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
  uri: "http://localhost:3001/graphql",
});

export default function App() {
  // Redux Store
  const store = createStore(rootReducer)

  return (
    <Router>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Grid>
            <Grid.Column width={16}>
              <Switch>
                  <Route exact path="/" component={Home} />                  
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/signup" component={Signup} />
                  {
                    Auth.loggedIn()
                      ? (
                        <>
                        <MenuSidebar />
                        <Navigation className="navigation"/>
                        <Route exact path="/workouts" component={Workout} />
                        <Route exact path="/dashboard" component={Dashboard}></Route>
                        </>
                      )
                      : ''
                  }
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
