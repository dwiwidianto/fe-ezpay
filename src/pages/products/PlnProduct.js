import React, { useEffect, useState } from "react";
import "../../App.css";
import { Navbar, CardProduct } from "../../components";
import style from "./pln.module.css";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import numeral from "numeral";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PLN() {
  const [jenis, setJenis] = useState("token");
  const [error, setError] = useState("");
  const [nominal, setNominal] = useState(20000);
  const [total, setTotal] = useState(nominal + 2000);
  const [nomor, setNomor] = useState(0);

  const handleChange = (e) => {
    e.preventDefault();
    setJenis(e.target.value);
  };

  const handlingChange = (e) => {
    e.preventDefault();
    setNominal(parseInt(e.target.value));
  };

  const onChangeHandler = (e) => {
    e.preventDefault();
    setNomor(e.target.value);
  };

  useEffect(() => {
    setTotal(nominal + 2000);
  }, [nominal]);

  const history = useHistory();

  const { accessToken } = useSelector((state) => state.auth);

  const transaction = async (jenis, nominal, total, nomor) => {
    let res = await axios.post(
      "http://localhost:8000/v1/transactions",
      {
        product: "pln",
        jenis,
        nominal,
        total,
        nomor,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    let { status, err } = res.data;
    if (status === "success") {
      history.push("/history");
    } else {
      setError(err);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    transaction(jenis, nominal, total, nomor);
  };
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
                  <Form onSubmit={onSubmitHandler}>
                    <div className="mb-3">
                      <Form.Check value="token" inline label="Token Listrik" name="produk listrik" type="radio" onChange={handleChange} defaultChecked />
                      <Form.Check value="tagihan" inline label="Tagihan Listrik" name="produk listrik" type="radio" onChange={handleChange} />
                    </div>
                    <Form.Control onChange={onChangeHandler} type="number" placeholder="contoh 23489274" />
                    {jenis === "token" && (
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
                        <li>Jenis Product : {`${jenis} listrik`}</li>
                        <li>Nomor Tagihan : {`${nomor}`}</li>
                        {jenis === "token" && <li>Nominal : {nominal}</li>}
                      </ol>
                    </Card>
                    {jenis === "token" && <h5>Total : </h5>}
                    <div className={style.Totalbayar}>
                      {jenis === "token" && <h4>Rp.{`${numeral(total).format("0,0")}`}</h4>}
                      <Button type="submit" className={`${style.btn} ${jenis === "tagihan" ? style.right : style.btn}`}>
                        Bayar
                      </Button>
                      {error !== "" && <div className="col-md-12 text-center text-danger">{error}</div>}
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
