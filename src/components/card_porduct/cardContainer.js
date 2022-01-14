import React from "react";
import style from "./cardConainer.module.css";
import { Container } from "react-bootstrap";

export default function cardContainer() {
  return (
    <>
      <Container className={style.cardContainer}>
        <div className={style.card}>qwewqe</div>
      </Container>
    </>
  );
}
