import React from "react";
import style from "./card.module.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PlnIcon, PdamIcon, BpjsIcon } from "../../assets";

export default function CardProduct() {
  return (
    <>
      <div className={style.cards}>
        <Link className={style.card} to="/products/pln">
          <img src={PlnIcon} className={style.icons} />
          <p className={style.text}>PLN</p>
        </Link>
        <Link className={style.card} to="/products/pdam">
          <img src={PdamIcon} className={style.icons} />
          <p className={style.text}>PDAM</p>
        </Link>
        <Link className={style.card} to="/products/bpjs">
          <img src={BpjsIcon} className={style.icons} />
          <p className={style.text}>BPJS</p>
        </Link>
      </div>
    </>
  );
}
