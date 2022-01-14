import React from "react";
import "../../App.css";
import { Navbar } from "../../components";
import { CardProduct } from "../../components";
import style from "./pln.module.css";
import { Container } from "react-bootstrap";

export default function PLN() {
  return (
    <>
      <Navbar />
      <CardProduct />
      <div className="products">
        <Container className={style.containerCard}>
            <div className={style.card}>
              <h1 className={style.textDisplay}>PLN</h1>
            </div>
        </Container>
      </div>
    </>
  );
}
