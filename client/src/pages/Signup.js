import React, {useState}from "react";
import { useMutation } from "@apollo/react-hooks";
import { ADD_USER } from "../utils/mutations";
import fit from "../components/videos/fit.mp4";

import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
} from "semantic-ui-react";

import Auth from "../utils/auth";

function Signup (props) {

    const [formState, setFormState] = useState({
      username: "",
      email: "",
      password: "",
    });
    const [addUser, { error }] = useMutation(ADD_USER);

    // update state based on form input changes
  const handleChange = event => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState }
        
      });
        console.log(data);
      


      Auth.login(data.addUser.token);
      
    } catch (e) {
      console.error(e);
    }
  };
  
  return (
    <div className="signup-container">
      <video src={fit} autoPlay loop muted type="video/mp4" />
      <Grid
        className="signup"
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" style={{ Color: "#508CA4" }} textAlign="center">
            Create your account
          </Header>
          <Form size="large" onSubmit={handleFormSubmit}>
            <Segment stacked>
              <Form.Input
                className="form-input"
                fluid
                name="username"
                icon="user"
                iconPosition="left"
                placeholder="Username"
                type="username"
                id="username"
                value={formState.username}
                onChange={handleChange}
              />

              <Form.Input
                className="form-input"
                fluid
                icon="mail"
                name="email"
                iconPosition="left"
                placeholder="E-mail address"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
              />
              <Form.Input
                className="form-input"
                fluid
                name="password"
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                id="password"
                value={formState.password}
                onChange={handleChange}
              />

              <Button
                style={{ backgroundColor: "#508CA4" }}
                fluid
                size="large"
                type="submit"
              >
                Login
              </Button>
            </Segment>
          </Form>
          {error && <div>Sign up failed</div>}
        </Grid.Column>
      </Grid>
    </div>
  );


  };

export default Signup;
