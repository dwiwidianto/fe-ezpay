import React, { useRef, useState } from "react";
import { FloatingLabel, Form, Button, Container } from "react-bootstrap";
import style from "./login.module.css";
import "../../App.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Login() {
  const { accessToken } = useSelector((state) => state.auth);

  const emailEl = useRef();
  const passwordEl = useRef();

  const dispatch = useDispatch();

  const [err, setErr] = useState("");

  const history = useHistory();

  if (accessToken !== "") {
    history.push("/");
  }

  const signIn = async (email, password) => {
    let res = await axios.post("http://localhost:8000/v1/auth", {
      email,
      password,
    });
    let { status, err, data } = res.data;
    console.log(status);
    if (status === "success") {
      dispatch(login({ accessToken: data.accessToken }));
      history.push("/");
    } else if (status === "fail") {
      setErr(err);
    }
  };

  const onSignInHandler = (e) => {
    e.preventDefault();
    const email = emailEl.current.value;
    const password = passwordEl.current.value;
    signIn(email, password);
  };

  return (
    <>
      <div className="login">
        <div className={style.loginIcon}>EZPAY</div>
        <Container className={style.card}>
          <FloatingLabel>
            <Form onSubmit={onSignInHandler}>
              <h2 className={style.labelLogin}>Login</h2>
              <div className="form-group">
                <label className={style.label}>Email</label>
                <br />
                <input ref={emailEl} type="email" className={style.form} placeholder="Your email" />
              </div>
              <div className="form-group">
                <label className={style.label}>Password</label>
                <br />
                <input ref={passwordEl} type="password" className={style.form} placeholder="Your password" />
              </div>
              {/* <div className="form-group">
                <div className={`custom-control custom-checkbox ${style.rememberme}`}>
                  <input type="checkbox" className="custom-control-input" id="customCheck1" />
                  <label className="custom-control-label" style={{ marginLeft: "5px" }} htmlFor="customCheck1">
                    Remember me
                  </label>
                </div>
              </div> */}
              {err !== "" && <div className="col-md-12 text-center text-danger">{err}</div>}
              <div className="col-md-12 text-center">
                <Button type="submit" className={style.btn}>
                  Login
                </Button>
              </div>
              <br />
              <hr />
              <p className="forgot-password text-right" style={{ textAlign: "center", marginTop: "10px" }}>
                Didn't have any account?
                <br />
                <a href="/register" style={{ color: "#75F991" }}>
                  Sign Up
                </a>
              </p>
            </Form>
          </FloatingLabel>
        </Container>
      </div>
    </>
  );
}
