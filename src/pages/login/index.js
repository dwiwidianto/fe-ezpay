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
            <h2 className={style.signin}>Login</h2>
            <div className="form-group">
              <label className={style.label}>Email</label>
              <br />
              <input type="email" className={style.form}  placeholder="Your email" />
            </div>
            <div className="form-group">
              <label className={style.label}>Password</label>
              <br />
              <input type="password" className={style.form} placeholder="Your password" />
            </div>
            <div className="form-group">
              <div className="custom-control custom-checkbox" style={{marginLeft:"180px", marginTop:"8px", marginBottom:"8px"}}>
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1" >
                  Remember me
                </label>
              </div>
            </div>
            <div class="col-md-12 text-center">
              <Button type="submit" href="/" className={style.button}>
                Login
              </Button>
            </div><br/><hr />
            <p className="forgot-password text-right" style={{ textAlign: "center" }}>
              Didn't have any account?
              <br />
              <Button href="/register" style={{color:"#75F991"}}>
                  Sign Up
              </Button>
            </p>
          </Form>
        </FloatingLabel>
      </Container>
    </>
  );
}