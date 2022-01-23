import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer
        className="statusbar"
        style={{
          backgroundColor: "#141414",
          position: "relative",
          bottom: "0",
          width: "100%",
        }}
      >
        <Container fluid className="footer">
          <Row>
            <Col md={6}>
              <h5
                className="footer-logo"
                style={{
                  color: "#75F991",
                  textAlign: "left",
                  paddingLeft: "32px",
                  fontSize: "30px",
                }}
              >
                EZPAY
              </h5>
              <BsFacebook
                style={{
                  color: "#ffffff",
                  marginLeft: "30px",
                  marginRight: "10px",
                }}
              />
              <BsTwitter style={{ color: "#ffffff", marginRight: "10px" }} />
              <BsInstagram style={{ color: "#ffffff" }} />
              <br />
              <div
                style={{
                  color: "white",
                  fontSize: "18px",
                  marginLeft: "30px",
                  marginTop: "30px",
                }}
              >
                {" "}
                Terms of Service | Privacy Policy{" "}
              </div>
            </Col>
            <Col md={3}>
              <h4
                className="sublist"
                style={{ fontFamily: "Roboto Slab", color: "white", marginLeft:"30px" }}
              >
                Ezpay App
              </h4>
              <ul>
                <li className="list-unstyled">
                  <a
                    href="#!"
                    style={{ textDecoration: "None", color: "#ffffff" }}
                  >
                    Why Ezpay App
                  </a>
                </li>
                <li className="list-unstyled">
                  <a
                    href="#!"
                    style={{ textDecoration: "None", color: "#ffffff" }}
                  >
                    How it works
                  </a>
                </li>
                <li className="list-unstyled">
                  <a
                    href="#!"
                    style={{ textDecoration: "None", color: "#ffffff" }}
                  >
                    Client Stories
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={3}>
              <h4
                className="sublist2"
                style={{
                  fontFamily: "Roboto Slab",
                  textAlign: "left",
                  color: "white",
                  marginLeft:"30px"
                }}
              >
                Company
              </h4>
              <ul>
                <li className="list-unstyled">
                  <a
                    href="#!"
                    style={{ textDecoration: "None", color: "#ffffff" }}
                  >
                    Career
                  </a>
                </li>
                <li className="list-unstyled">
                  <a
                    href="#!"
                    style={{ textDecoration: "None", color: "#ffffff" }}
                  >
                    About Us
                  </a>
                </li>
                <li className="list-unstyled">
                  <a
                    href="#!"
                    style={{ textDecoration: "None", color: "#ffffff" }}
                  >
                    Features
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <Container
          fluid
          className="cont-fluid"
          style={{ backgroundColor: "#1A1A1A", height: "40px" }}
        >
          <div
            className="copyright"
            style={{ marginLeft: "40%", color: "#ffffff", paddingTop: "10px" }}
          >
            Copyright © 2021{" "}
            <a href="/#" style={{ color: "#75F991", textDecoration: "None" }}>
              Kelompok 13
            </a>
          </div>
        </Container>
      </footer>
    </>
  );
}