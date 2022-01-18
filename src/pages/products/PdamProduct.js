import React from "react";
import { Navbar, CardProduct } from "../../components";
import "../../App.css";
import style from "./pdam.module.css";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

export default function PDAM() {
  return (
    <>
      <Navbar />
      <CardProduct />
      <div className="products">
        <Container>
          <Row>
            <Col>
              <Card className={style.card}>
                <Card.Body>
                  <h4>
                    <b>Bayar Tagihan Air</b>
                  </h4>
                  <Form>
                    <Form.Select>
                      <h5 style={{ marginTop: "15px" }}>Wilayah</h5>

                      <option>Default select</option>
                      <option>Jakarta</option>
                      <option>Bandung</option>
                      <option>Surabaya</option>
                    </Form.Select>
                    <h5 style={{ marginTop: "15px" }}>Nomor Pelanggan</h5>
                    <Form.Control type="number" placeholder="contoh 23489274" />

                    <Card className={style.cardKeterangan}>
                      <span className={style.labelKeterangan}>Keterangan</span>
                      <ol className={style.listKeterangan}>
                        <li>Wilayah : </li>
                        <li>Nomor Tagihan : </li>
                      </ol>
                    </Card>
                    <h5>Total : </h5>
                    <div className={style.Totalbayar}>
                      <h4>Rp.</h4>
                      <Button type="submit" className={style.btn}>
                        Bayar
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
