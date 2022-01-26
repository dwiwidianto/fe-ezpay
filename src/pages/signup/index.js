import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { FloatingLabel, Form, Button, Container } from "react-bootstrap";
import style from "./signup.module.css";
import "../../App.css";
import axios from "axios";
import { useSelector } from "react-redux";

const SignUp = () => {
  const { accessToken } = useSelector((state) => state.auth);

  const emailEl = useRef();
  const phoneEl = useRef();
  const fullnameEl = useRef();
  const passwordEl = useRef();
  const confirmPasswordEl = useRef();

  const [err, setErr] = useState("");

  const history = useHistory();

  if (accessToken !== "") {
    history.push("/");
  }

  const signUp = async (fullname, phone, email, password) => {
    let res = await axios.post("http://localhost:8000/v1/users", {
      fullname,
      phone,
      email,
      password,
    });
    let { status, message } = res.data;
    if (status === "success") {
      history.push("/login");
    } else if (status === "fail") {
      setErr(message);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const phone = phoneEl.current.value;
    const email = emailEl.current.value;
    const fullname = fullnameEl.current.value;
    const password = passwordEl.current.value;
    const confirmPassword = confirmPasswordEl.current.value;
    if (password === confirmPassword) {
      signUp(fullname, phone, email, password);
    } else if (password !== confirmPassword) {
      setErr("password is not same with confirm password");
    }
  };

  return (
    <>
      <div className="signup">
        <div className={style.labelIcon}>EZPAY</div>
        <Container className={style.card}>
          <FloatingLabel>
            <Form onSubmit={onSubmitHandler}>
              <h2 className={style.labelRegister}>Register</h2>
              <div className="form-group">
                <label className={style.label}>Full Name</label>
                <br />
                <input ref={fullnameEl} type="text" className={style.form} placeholder="Your full name" />
              </div>
              <div className="form-group">
                <label className={style.label}>Email</label>
                <br />
                <input ref={emailEl} type="email" className={style.form} placeholder="Your email" />
              </div>
              <div className="form-group">
                <label className={style.label}>Phone</label>
                <br />
                <input ref={phoneEl} type="tel" className={style.form} placeholder="Your phone number" />
              </div>
              <div className="form-group">
                <label className={style.label}>Password</label>
                <br />
                <input ref={passwordEl} type="password" className={style.form} placeholder="Your password" />
              </div>
              <div className="form-group">
                <label className={style.label}>Confirm Password</label>
                <br />
                <input ref={confirmPasswordEl} type="password" className={style.form} placeholder="Your confirm password" />
              </div>
              <br />
              {err !== "" && <div className="col-md-12 text-center text-danger">{err}</div>}
              <div className="col-md-12 text-center">
                <Button type="submit" className={style.btn}>
                  Sign Up
                </Button>
              </div>
              <p className="forgot-password text-right" style={{ textAlign: "center", marginTop: "20px" }}>
                Already have an account?
                <a href="/login" style={{ color: "#75F991", marginLeft: "2px" }}>
                  Login
                </a>
              </p>
            </Form>
          </FloatingLabel>
        </Container>
      </div>
    </>
  );
};

export default SignUp;
