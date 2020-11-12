import React ,{useState} from "react";
import { useMutation } from "@apollo/react-hooks";
import run from "../components/videos/run.mp4";

import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";


const LoginForm = props => {

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

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
      const { data } = await login({
        variables: { ...formState }
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: ''

    });
  };
    return (
      <div className="login-container">
        <video src={run} autoPlay loop muted type="video/mp4" />
        <Grid
          className="login"
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" style={{ Color: "#508CA4" }} textAlign="center">
              Log-in to your account
            </Header>
            <Form size="large" onSubmit={handleFormSubmit}>
              <Segment stacked>
                <Form.Input
                  className="form-input"
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                  name="email"
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <Form.Input
                  className="form-input"
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  name="password"
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
                  <a style={{color:"white"}} href="/dashboard"> Login </a>
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <a href="/signup">Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );

    }
    

export default LoginForm;
