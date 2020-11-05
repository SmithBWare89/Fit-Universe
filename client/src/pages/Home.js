import React, { useEffect } from 'react';
import { TOGGLE_SIDEBAR } from '../utils/actions/sidebar';
import { useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react'

const Home = () => {
  const dispatch = useDispatch();
  function toggleSidebar(e) {
    e.preventDefault();
    dispatch({type: TOGGLE_SIDEBAR})
  }

  return (
    <div className="container">
      <Button
        onClick={toggleSidebar}
      >
        Splash Page
      </Button>
    </div>
  );
};

export default Home;