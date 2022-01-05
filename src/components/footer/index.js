import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <footer
      className="font-small pt-4 mt-4"
      style={{
        backgroundColor: "black",
        position: "relative",
        bottom: " 0",
        width: "100%",
      }}
    >
      <Container fluid className="footer">
        <Row>
          <Col md="5">
            <h5
              className="logo"
              style={{
                color: "black",
                textAlign: "left",
                paddingLeft: "32px",
              }}
            >
              EZPAY
            </h5>
            <BsFacebook style={{ marginLeft: "30px", marginRight: "10px" }} />
            <BsTwitter style={{ marginRight: "10px" }} />
            <BsInstagram />
          
          <Col md="3">
            <h5 style={{ fontFamily: "Roboto Slab" }}>Ezpay App</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!" style={{ textDecoration: "None", color: "white" }}>
                  Why Ezpay App
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#!" style={{ textDecoration: "None", color: "white" }}>
                  How it works
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#!" style={{ textDecoration: "None", color: "white" }}>
                  Client Stories
                </a>
              </li>
            </ul>
          </Col>
          </Col>
          <Col md="4">
            <h5 style={{ fontFamily: "Roboto Slab", textAlign: "left" }}>
              Company
            </h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!" style={{ textDecoration: "None", color: "white" }}>
                  Career
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#!" style={{ textDecoration: "None", color: "white" }}>
                  About Us
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#!" style={{ textDecoration: "None", color: "white" }}>
                  Features
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container fluid style={{ backgroundColor: "#1A1A1A", height: "50px" }}>
        <p style={{ marginLeft: "500px",  }}> Copyright © 2021 Kelompok 13 </p>
      </Container>
    </footer>
  );
}