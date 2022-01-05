import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";

function navbar() {
  return (
    <>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand
            className="logo"
            style={{ marginRight: "400px", color: "#75F991" }}
          >
            EZPAY
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>
                <Link to="/" style={{ textDecoration: "None", color: "white" }}>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/pln"
                  style={{ textDecoration: "None", color: "white" }}
                >
                  Product
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/history"
                  style={{ textDecoration: "None", color: "white" }}
                >
                  History
                </Link>
              </Nav.Link>
            </Nav>
            <Button variant="outlined" color="success">
              <Link
                to="/login"
                style={{ textDecoration: "None", color: "#75F991" }}
              >
                Login
              </Link>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default navbar;