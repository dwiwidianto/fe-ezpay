import React, { useState } from "react";
import { Navbar, CardProduct } from "../../components";
import "../../App.css";
import style from "./pdam.module.css";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

export default function PDAM() {
  const [region, setRegion] = useState("jakarta");
  const [billNumber, setBillNumber] = useState(0);
  const [error, setError] = useState("");

  const onChangeHandler = (e) => {
    e.preventDefault();
    setRegion(e.target.value);
  };

  const onChangingHandler = (e) => {
    e.preventDefault();
    setBillNumber(e.target.value);
  };

  const history = useHistory();

  const { accessToken } = useSelector((state) => state.auth);

  const transaction = async (region, billNumber) => {
    let res = await axios.post(
      "http://localhost:8000/v1/transactions",
      {
        product: "pdam",
        region,
        billNumber,
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
    if (accessToken === "") {
      history.push("/login");
    }
    transaction(region, parseInt(billNumber));
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
                    <b>Bayar Tagihan Air</b>
                  </h4>
                  <Form onSubmit={onSubmitHandler}>
                    <h5 style={{ marginTop: "15px" }}>Wilayah</h5>
                    <Form.Select onChange={onChangeHandler}>
                      <option value="jakarta">Jakarta</option>
                      <option value="bandung">Bandung</option>
                      <option value="surabaya">Surabaya</option>
                    </Form.Select>
                    <h5 style={{ marginTop: "15px" }}>Nomor Pelanggan</h5>
                    <Form.Control onChange={onChangingHandler} type="number" placeholder="contoh 23489274" />

                    <Card className={style.cardKeterangan}>
                      <span className={style.labelKeterangan}>Keterangan</span>
                      <ol className={style.listKeterangan}>
                        <li>Wilayah : {region}</li>
                        <li>Nomor Tagihan : {billNumber}</li>
                      </ol>
                    </Card>
                    <div className={style.Totalbayar}>
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
