import React from "react";
import { FloatingLabel, Form, Button, Container } from "react-bootstrap";
import style from "./login.module.css";
import '../../App.css'

export default function Login() {
  return (
    <>
    <div className="login">
      <div className={style.loginIcon}>EZPAY</div>
      <Container className={style.card}>
        <FloatingLabel>
          <Form>
            <h2 className={style.labelLogin}>Login</h2>
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
              <div className={style.rememberme}>
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" style={{marginLeft: "5px"}} htmlFor="customCheck1" >
                  Remember me
                </label>
              </div>
            </div>
            <div class="col-md-12 text-center">
              <Button type="submit" href="/" className={style.button}>
                Login
              </Button>
            </div><br/><hr/>
            <p className="forgot-password text-right" style={{ textAlign: "center", marginTop:"10px" }}>
              Didn't have any account?
              <br />
              <Button href="/register" style={{color:"#75F991"}}>
                  Sign Up
              </Button>
            </p>
          </Form>
        </FloatingLabel>
      </Container>
      </div>
    </>
  );
}
