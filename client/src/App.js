import React from "react";
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import { Grid, Menu } from 'semantic-ui-react';
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
<<<<<<< HEAD
import Blog from "./pages/Blog";
import SinglePost from "./pages/SinglePost";
=======
>>>>>>> 631079c4ccb17b2f62252ae226917dd55178f562
import Workout from './pages/Workout';

//Components
import MenuSidebar from '../src/components/MenuSidebar';
import Navigation from './components/Navigation';
<<<<<<< HEAD


import { state } from './utils/GlobalState';
=======
import Dashboard from './components/Dashboard';
>>>>>>> 631079c4ccb17b2f62252ae226917dd55178f562

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
  uri: "http://localhost:3000/graphql",
});

export default function App() {
  // Redux Store
  const store = createStore(rootReducer)
  const loggedIn = Auth.getToken();

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
                <Route path="/blogs">
                  <Navigation />
                  <Blog />
                </Route>
                <Route exact path="/singlepost" component={SinglePost} />
                <Route component={NoMatch} />
                  <Route exact path="/" component={Home} />                  
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/signup" component={Signup} />
                  <Route exact path="/workouts">
                    <Navigation />
                    <MenuSidebar />
                    <Workout />
                  </Route>
                  <Route exact path="/dashboard">
                    <Navigation />
                    <MenuSidebar />
                    <Dashboard />
                  </Route>
                  <Route component={NoMatch} />
              </Switch>
            </Grid.Column>
          </Grid>
        </Provider>
      </ApolloProvider>
    </Router>
  );
}
