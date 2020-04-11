import React from "react";
import {
  Grid,
  Jumbotron,
  Button,
  Image,
  Col,
  Row,
  Panel,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <Grid>
      <Jumbotron className="home">
        <h1>Welcome to TESCO.</h1>
        <p>
          This is how to build a website with React, React-bootstrap and
          React-Router.
        </p>
        <Link to="/About">
          <Button bsStyle="primary">About</Button>
        </Link>
      </Jumbotron>
      <Row className="show-grid">
        <Col md={6} sm={6} xs={12}>
          <Panel bsStyle="default">
            <Panel.Body>
              <Row>
                <Image
                  src="Images/blur-close-up-code-computer-546819.jpg"  className="pic-shadow"
                  responsive
                />
              </Row>
            </Panel.Body>
          </Panel>
        </Col>
        <Col md={6} sm={6} xs={12}>
          <Panel bsStyle="default" >
            <Panel.Body>
              <Row>
                <Image
                  src="Images/code-coding-computer-data-574071.jpg"
                  responsive className="pic-shadow"
                />
              </Row>
            </Panel.Body>
          </Panel>
        </Col>
      </Row>
    </Grid>
  );
};
export default Home;
