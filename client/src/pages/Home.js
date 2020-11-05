import React, { useEffect } from 'react';
import { TOGGLE_SIDEBAR } from '../utils/actions/sidebar';
import { useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react'

const Home = () => {
  const dispatch = useDispatch();

  function toggleSidebar() {
    dispatch({type: TOGGLE_SIDEBAR})
  }

  return (
    <div className="container">
      <a
        href='#'
        onClick={toggleSidebar}
      >Splash Page</a>
    </div>
  );
};

export default Home;