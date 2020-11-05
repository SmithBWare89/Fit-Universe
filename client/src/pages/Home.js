import React, { useEffect } from 'react';
import { TOGGLE_SIDEBAR } from '../utils/actions/sidebar';
import { useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react'

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <a
        onClick={() => dispatch({
          type: TOGGLE_SIDEBAR,
          payload: {
            action: true
          }
        })}
      >Splash Page</a>
    </div>
  );
};

export default Home;