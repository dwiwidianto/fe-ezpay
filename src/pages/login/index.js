import React from "react";
import { FloatingLabel, Form, Button, Container } from "react-bootstrap";
import style from "./login.module.css";

export default function Login() {
  return (
    <>
      <div className={style.login}>EZPAY</div>
      <Container className={style.card}>
        <FloatingLabel>
          <Form>
            <h3 style={{ textAlign: "center" }}>Sign In</h3>
            <div className="form-group">
              <label>Email address</label>
              <br />
              <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <br />
              <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>
            <div class="col-md-12 text-center">
              <Button type="submit" className="btn btn-primary btn-block" variant="warning" style={{ fontFamily: "Roboto Slab", fontWeight: "bold" }}>
                Login
              </Button>
              <hr />
            </div>
            <p className="forgot-password text-right" style={{ textAlign: "center" }}>
              Didn't have any account?
              <br />
              <Button className="btn btn-warning btn-block">
                <a href="/signup" classname={style.button}>
                  Sign Up
                </a>
              </Button>
            </p>
          </Form>
        </FloatingLabel>
      </Container>
    </>
  );
}
