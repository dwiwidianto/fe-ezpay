import React from "react";
import style from "./card.module.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import pln from '../../assets/pln-icon.png'

export default function CardProduct() {
  return (
    <>
      <Container className={style.cards}>
        <Link className={style.card} to="/">
            <img src={pln} className={style.icons}/>
          <p className={style.text}>PLN</p>
        </Link>
        <Link className={style.card} to="/">
            <img src={pln} className={style.icons}/>
          <p className={style.text}>PLN</p>
        </Link>
        <Link className={style.card} to="/">
            <img src={pln} className={style.icons}/>
          <p className={style.text}>PLN</p>
        </Link>
        <Link className={style.card} to="/">
            <img src={pln} className={style.icons}/>
          <p className={style.text}>PLN</p>
        </Link>
        <Link className={style.card} to="/">
            <img src={pln} className={style.icons}/>
          <p className={style.text}>PLN</p>
        </Link>
      </Container>
    </>
  );
}
