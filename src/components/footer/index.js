import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./statusbar.module.css"
// import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="statusbar">
      <Container fluid className="footer">
        <Row>
          <Col md="5">
            <h5 className="footer-logo">
              EZPAY
            </h5>
            {/* <BsFacebook style={{ marginLeft: "30px", marginRight: "10px" }} />
            <BsTwitter style={{ marginRight: "10px" }} />
            <BsInstagram /> */}
          
          <Col md="3">
            <h5 className="sublist">Ezpay App</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!" className="list">
                  Why Ezpay App
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#!" className="list">
                  How it works
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#!" className="list">
                  Client Stories
                </a>
              </li>
            </ul>
          </Col>
          </Col>
          <Col md="4">
            <h5 className="sublist2">
              Company
            </h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!" className="list">
                  Career
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#!" className="list">
                  About Us
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#!" className="list">
                  Features
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container fluid className="cont-fluid">
        <p className="copyright"> Copyright © 2021 Kelompok 13 </p>
      </Container>
    </footer>
  );
}