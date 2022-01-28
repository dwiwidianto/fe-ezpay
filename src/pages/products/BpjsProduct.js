import React, { useState } from "react";
import { Navbar, CardProduct } from "../../components";
import "../../App.css";
import style from "./bpjs.module.css";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

export default function BPJS() {
  const [type, setType] = useState("kesehatan");
  const [billNumber, setBillNumber] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");
  const onChange = (e) => {
    e.preventDefault();
    setType(e.target.value);
  };
  const onChangingHandler = (e) => {
    e.preventDefault();
    setBillNumber(e.target.value);
  };
  const onChangeHandler = (e) => {
    e.preventDefault();
    setQuantity(e.target.value);
  };

  const history = useHistory();

  const { accessToken } = useSelector((state) => state.auth);

  const transaction = async (type, billNumber, quantity) => {
    let res = await axios.post(
      "http://http://172.104.61.239/v1/transactions",
      {
        product: "bpjs",
        type,
        billNumber: parseInt(billNumber),
        quantity: parseInt(quantity),
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
    transaction(type, billNumber, quantity);
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
                    <h5 style={{ marginTop: "20px" }}>Jenis BPJS</h5>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check defaultChecked onChange={onChange} value="kesehatan" inline label="Kesehatan" name="group1" type={type} id={`inline-${type}-1`} />
                        <Form.Check onChange={onChange} value="ketenagakerjaan" inline label="Ketenagakerjaan" name="group1" type={type} id={`inline-${type}-2`} />
                      </div>
                    ))}

                    <h5 style={{ marginTop: "15px" }}>Nomor BPJS</h5>
                    <Form.Control onChange={onChangingHandler} type="number" placeholder="contoh 23489274" />

                    <h5 style={{ marginTop: "15px" }}>Pembayaran Bulan</h5>
                    <Form.Select onChange={onChangeHandler}>
                      <option value={1}>1 bulan</option>
                      <option value={2}>2 bulan</option>
                      <option value={3}>3 bulan</option>
                      <option value={6}>6 bulan</option>
                      <option value={12}>12 bulan</option>
                    </Form.Select>
                    <Card className={style.cardKeterangan}>
                      <span className={style.labelKeterangan}>Keterangan</span>
                      <ol className={style.listKeterangan}>
                        <li>Jenis BPJS :{type} </li>
                        <li>Nomor Tagihan : {billNumber}</li>
                        <li>Bayar untuk :{quantity + " bulan"} </li>
                      </ol>
                    </Card>
                    {/* <h5>Total : </h5> */}
                    <div className={style.Totalbayar}>
                      {/* <h4>Rp.</h4> */}
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
