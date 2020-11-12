import React from "react";
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import Workout from './pages/Workout';

//Components
import MenuSidebar from '../src/components/MenuSidebar';
import Navigation from './components/Navigation';

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
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
})

function App() {
  // Redux Store
  const store = createStore(rootReducer)

  return (
    <ApolloProvider client={client}>
      <Router>
        <Provider store={store}>
          <MenuSidebar />
          <Navigation className="navigation"/>
          <Grid>
              <Grid.Column >
                <Switch>
                  <Route exact path="/" component={Home} />                  
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/signup" component={Signup} />
                  <Route exact path="/workouts" component={Workout} />
                  <Route component={NoMatch} />
                </Switch>
              </Grid.Column>
          </Grid>
        </Provider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
