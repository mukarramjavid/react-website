import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import "./Footer.css";
export default function Footer() {
  return (
    <>
      <hr />
      <div className="footer">
        <Grid>
          <Row>
            <Col xs={12} md={12} className="footer-desc">
              <h6>Copyrights Reserved</h6>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} className="footer-desc">
              <ul className="social">
                <li>
                  <a
                    className="btn "
                    href="https://twitter.com/hafizj1125/"
                    
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="btn "
                    href="https://www.facebook.com/hafizj1125"
                    
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
    
                 <li>
                  <a
                    className="btn "
                    href="<i class="fab fa-github"></i>"
                  >
                    <i class="fab fa-github"></i>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Grid>
      </div>
    </>
  );
}
