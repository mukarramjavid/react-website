import React from "react";
import { Image, Grid, Row, Col, Panel } from "react-bootstrap";
import "./About.css";
import Skils from "./Skils";

const About = () => {
  const arr = [
    {
      id: 1,
      skill: "Database",
    },
    {
      id: 2,
      skill: "C#.NET",
    },
    {
      id: 3,
      skill: "React JS",
    },
    {
      id: 4,
      skill: "JavaScript",
    },
    {
      id: 5,
      skill: "WordPress",
    },
    {
      id: 6,
      skill: "ASP.NET MVC",
    },
  ];
  return (
    <div>
      <Image src="Images/mac.jpg" className="header-img" responsive />
      <br />
      <Grid>
        <Row className="show-grid">
          <Col md={4} sm={6} xs={12}>
            <Panel bsStyle="primary">
              <Panel.Heading>
                <Panel.Title componentClass="h3">
                  <Image
                    src="Images/a1.png"
                    className="profile-img"
                    responsive
                  />
                  <div className="profile-name">Mukarram javid</div>
                </Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                <Row className="show-grid">
                  <Row>
                    {arr.map((num, i) => {
                      return (
                        <Col md={6} sm={6} xs={6} key={num.id}>
                          <Skils skills={arr[i].skill} />
                        </Col>
                      );
                    })}
                  </Row>
                </Row>
              </Panel.Body>
            </Panel>
          </Col>
          <Col md={8} sm={6} xs={12}>
            <Panel bsStyle="default">
              <Panel.Body className="panelBack">
               <Row>
                    <p className="desc">I am Mukarram Javid. i'm doing BS computer science from university of engineering and technology lahore, new campus KSK.</p>
               </Row>
               <Row>
               <Image
                    src="Images/programmer.gif"
                    className="desc-img"
                    responsive
                  />
               </Row>
              </Panel.Body>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};
export default About;
