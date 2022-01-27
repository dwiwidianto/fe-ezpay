import React, { useState } from "react";
import { Navbar, CardProduct } from "../../components";
import "../../App.css";
import style from "./bpjs.module.css";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

export default function BPJS() {
  const [jenis, setJenis] = useState("kesehatan");
  const [noTagihan, setNoTagihan] = useState(0);
  const [bulan, setBulan] = useState(1);
  const onChange = (e) => {
    e.preventDefault();
    setJenis(e.target.value);
  };
  const onChangingHandler = (e) => {
    e.preventDefault();
    setNoTagihan(e.target.value);
  };
  const onChangeHandler = (e) => {
    e.preventDefault();
    setBulan(e.target.value);
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
                  <Form>
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
                        <li>Jenis BPJS :{jenis} </li>
                        <li>Nomor Tagihan : {noTagihan}</li>
                        <li>Bayar untuk :{bulan + " bulan"} </li>
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
