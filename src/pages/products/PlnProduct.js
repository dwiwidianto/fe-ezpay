import React, { useEffect, useState } from "react";
import "../../App.css";
import { Navbar, CardProduct } from "../../components";
import style from "./pln.module.css";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import numeral from "numeral";

export default function PLN() {
  const [produkListrik, setProdukListrik] = useState("token");
  const [nominal, setNominal] = useState(20000);
  const [total, setTotal] = useState(nominal + 2000);
  const [nomorTagihan, setNomorTagihan] = useState(0);

  const handleChange = (e) => {
    e.preventDefault();
    setProdukListrik(e.target.value);
  };

  const handlingChange = (e) => {
    e.preventDefault();
    setNominal(parseInt(e.target.value));
  };

  const onChangeHandler = (e) => {
    e.preventDefault();
    setNomorTagihan(e.target.value);
  };

  useEffect(() => {
    setTotal(nominal + 2000);
  }, [nominal]);

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
                    <div className="mb-3">
                      <Form.Check value="token" inline label="Token Listrik" name="produk listrik" type="radio" onChange={handleChange} defaultChecked />
                      <Form.Check value="tagihan" inline label="Tagihan Listrik" name="produk listrik" type="radio" onChange={handleChange} />
                    </div>
                    <Form.Control onChange={onChangeHandler} type="number" placeholder="contoh 23489274" />
                    {produkListrik === "token" && (
                      <>
                        <h5 style={{ marginTop: "10px" }}>Nominal</h5>
                        <Card className={style.radioColor}>
                          <div className={style.radioButtons}>
                            <label className={style.customRadio}>
                              <input defaultChecked value={20000} onChange={handlingChange} type="radio" name="radio" className={style.cardRadio} />
                              <div className={style.radioBtn}>
                                <span className={style.labelNominal}>Rp. 20.000</span>
                              </div>
                            </label>

                            <label className={style.customRadio}>
                              <input value={50000} onChange={handlingChange} type="radio" name="radio" className={style.cardRadio} />
                              <div className={style.radioBtn}>
                                <span className={style.labelNominal}>Rp. 50.000</span>
                              </div>
                            </label>

                            <label className={style.customRadio}>
                              <input value={100000} onChange={handlingChange} type="radio" name="radio" className={style.cardRadio} />
                              <div className={style.radioBtn}>
                                <span className={style.labelNominal}>Rp. 100.000</span>
                              </div>
                            </label>

                            <label className={style.customRadio}>
                              <input value={250000} onChange={handlingChange} type="radio" name="radio" className={style.cardRadio} />
                              <div className={style.radioBtn}>
                                <span className={style.labelNominal}>Rp. 250.000</span>
                              </div>
                            </label>

                            <label className={style.customRadio}>
                              <input value={500000} onChange={handlingChange} type="radio" name="radio" className={style.cardRadio} />
                              <div className={style.radioBtn}>
                                <span className={style.labelNominal}>Rp. 500.000</span>
                              </div>
                            </label>

                            <label className={style.customRadio}>
                              <input value={1000000} onChange={handlingChange} type="radio" name="radio" className={style.cardRadio} />
                              <div className={style.radioBtn}>
                                <span className={style.labelNominal}>Rp. 1.000.000</span>
                              </div>
                            </label>
                          </div>
                        </Card>
                      </>
                    )}
                    <Card className={style.cardKeterangan}>
                      <span className={style.labelKeterangan}>Keterangan</span>
                      <ol className={style.listKeterangan}>
                        <li>Jenis Product : {`${produkListrik} listrik`}</li>
                        <li>Nomor Tagihan : {`${nomorTagihan}`}</li>
                        {produkListrik === "token" && <li>Nominal : {nominal}</li>}
                      </ol>
                    </Card>
                    {produkListrik === "token" && <h5>Total : </h5>}
                    <div className={style.Totalbayar}>
                      {produkListrik === "token" && <h4>Rp.{`${numeral(total).format("0,0")}`}</h4>}
                      <Button type="submit" className={`${style.btn} ${produkListrik === "tagihan" ? style.right : style.btn}`}>
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
