import React from "react";
import "../../App.css";
import { Navbar, CardProduct } from "../../components";
import style from "./pln.module.css";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

export default function PLN() {
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
                    <b>Beli Token / Bayar Tagihan Listrik</b>
                  </h4>
                  <h5>Jenis Product Listrik</h5>
                  <Form>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check inline label="Token Listrik" name="group1" type={type} id={`inline-${type}-1`} />
                        <Form.Check inline label="Tagihan Listrik" name="group1" type={type} id={`inline-${type}-2`} />
                      </div>
                    ))}
                    <Form.Control type="number" placeholder="contoh 23489274" />
                    <h5 style={{ marginTop: "10px" }}>Nominal</h5>
                    <Card className={style.radioColor}>
                      <div className={style.radioButtons}>
                        <label className={style.customRadio}>
                          <input type="radio" name="radio" className={style.cardRadio} />
                          <div className={style.radioBtn}>
                            <span className={style.labelNominal}>Rp. 20.000</span>
                          </div>
                        </label>

                        <label className={style.customRadio}>
                          <input type="radio" name="radio" className={style.cardRadio} />
                          <div className={style.radioBtn}>
                            <span className={style.labelNominal}>Rp. 50.000</span>
                          </div>
                        </label>

                        <label className={style.customRadio}>
                          <input type="radio" name="radio" className={style.cardRadio} />
                          <div className={style.radioBtn}>
                            <span className={style.labelNominal}>Rp. 100.000</span>
                          </div>
                        </label>

                        <label className={style.customRadio}>
                          <input type="radio" name="radio" className={style.cardRadio} />
                          <div className={style.radioBtn}>
                            <span className={style.labelNominal}>Rp. 200.000</span>
                          </div>
                        </label>

                        <label className={style.customRadio}>
                          <input type="radio" name="radio" className={style.cardRadio} />
                          <div className={style.radioBtn}>
                            <span className={style.labelNominal}>Rp. 500.000</span>
                          </div>
                        </label>

                        <label className={style.customRadio}>
                          <input type="radio" name="radio" className={style.cardRadio} />
                          <div className={style.radioBtn}>
                            <span className={style.labelNominal}>Rp. 1.000.000</span>
                          </div>
                        </label>

                        <label className={style.customRadio}>
                          <input type="radio" name="radio" className={style.cardRadio} />
                          <div className={style.radioBtn}>
                            <span className={style.labelNominal}>Rp. 5.000.000</span>
                          </div>
                        </label>

                        <label className={style.customRadio}>
                          <input type="radio" name="radio" className={style.cardRadio} />
                          <div className={style.radioBtn}>
                            <span className={style.labelNominal}>Rp. 10.000.000</span>
                          </div>
                        </label>

                        <label className={style.customRadio}>
                          <input type="radio" name="radio" className={style.cardRadio} />
                          <div className={style.radioBtn}>
                            <span className={style.labelNominal}>Rp. 10.000.000</span>
                          </div>
                        </label>

                        <label className={style.customRadio}>
                          <input type="radio" name="radio" className={style.cardRadio} />
                          <div className={style.radioBtn}>
                            <span className={style.labelNominal}>Rp. 10.000.000</span>
                          </div>
                        </label>
                      </div>
                    </Card>
                    <Card className={style.cardKeterangan}>
                      <span className={style.labelKeterangan}>Keterangan</span>
                      <ol className={style.listKeterangan}>
                        <li>Jenis Product : </li>
                        <li>Nomor Tagihan : </li>
                        <li>Nominal : </li>
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
