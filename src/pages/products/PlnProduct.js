import React from "react";
import "../../App.css";
import { Navbar, CardProduct } from "../../components";
import style from "./pln.module.css";
import { Container, Row, Col, Card, Button, OverlayTrigger } from "react-bootstrap";

export default function PLN() {
  return (
    <>
      <Navbar />
      <CardProduct />
      <div className="products">
        <Container>
          <Row>
            <Col>
              <Card className={style.cardStyle} >
                <Card.Body>This is some text within a card body. </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
