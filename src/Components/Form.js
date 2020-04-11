import React, { Component } from "react";
import {
  Button,
  Grid,
  Row,
  Col,
  Panel,
  FormControl,
  FormGroup,
  ControlLabel,
} from "react-bootstrap";
import Caldener from "./Caldener";
// import "./Form.css";

export default class Forms extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      email: "",
    };
  }
  handleChange = (e) => {
    let newName = e.target.name;
    let newValue = e.target.value;
    this.setState({ [newName]: newValue }, () => {
      this.getValidationStateEmail(newValue);
    });
  };
  getValidationStateName = () => {
    const length = this.state.name.length;
    if (length > 10) return "success";
    if (length > 5) return "warning";
    if (length > 0) return "error";
    return null;
  };
  getValidationStatePassword = () => {
    const length = this.state.password.length;
    if (length > 10) return "success";
    if (length > 5) return "warning";
    if (length > 0) return "error";
    return null;
  };
  getValidationStateEmail = (value) => {
    let valid = this.state.email;
    value = valid.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    if (value) return "success";
    return null;
  };
  handleSubmitt = (e) => {
    if (
      this.state.email === "" ||
      this.state.name === "" ||
      this.state.password === ""
    ) {
      alert("All Fields are Required. . !\nPlease Fill out those fields!");
    }
    // else{
    //   alert('Thanks for reaching..!!')
    //   // ()
    //   // const name1=this.state.name;
    //   // const email1=this.state.email;
    //   // const password1=this.state.password;
    //   // this.setState({name1:"",email1:'',password1:''})

    // }
  };
  render() {
    return (
      <Grid className="form">
        <Row className="show-grid">
          <Col md={4} sm={6} xs={12}>
            <Caldener />
          </Col>
          <Col md={8} sm={6} xs={12}>
            <Panel>
              <Panel.Heading>
                <Panel.Title componentClass="h3">
                  Fill out this From.
                </Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                <form>
                  <FormGroup
                    controlId="formBasicText"
                    validationState={this.getValidationStateName()}
                  >
                    <ControlLabel>Name</ControlLabel>
                    <FormControl
                      type="text"
                      value={this.state.value}
                      name="name"
                      placeholder="Enter Name"
                      onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                  </FormGroup>
                  <FormGroup
                    controlId="formBasicText"
                    validationState={this.getValidationStateEmail()}
                  >
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                      type="email"
                      value={this.state.value}
                      name="email"
                      placeholder="Enter Email"
                      onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                  </FormGroup>
                  <FormGroup
                    controlId="formBasicText"
                    validationState={this.getValidationStatePassword()}
                  >
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                      type="password"
                      value={this.state.value}
                      name="password"
                      placeholder="Enter Password"
                      onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                  </FormGroup>
                  <Button bsStyle="primary" block onClick={this.handleSubmitt}>
                    Login
                  </Button>
                  <button type="reset" className="btn btn-danger btn-block">
                    Reset
                  </button>
                </form>
              </Panel.Body>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}
