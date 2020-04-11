import React, { Component } from "react";
import "./About.css";
// import { Grid, Row, Col } from "react-bootstrap";

export default class AvatarList extends Component {
  render() {
    return <h3 className="skills-name">{this.props.skills}</h3>;
  }
}
