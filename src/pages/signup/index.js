import React from "react";
import { FloatingLabel, Form, Button, Container } from "react-bootstrap";
import style from "./signup.module.css";
import '../../App.css'

export default function Signup() {
  return (
    <>
    <div className="signup">
      <div className={style.labelIcon}>EZPAY</div>
      <Container className={style.card}>
        <FloatingLabel>
          <Form>
            <h2 className={style.labelRegister}>Register</h2>
            <div className="form-group">
              <label className={style.label}>Full Name</label>
              <br />
              <input type="text" className={style.form}  placeholder="Your full name" />
            </div>
            <div className="form-group">
              <label className={style.label}>Email</label>
              <br />
              <input type="email" className={style.form}  placeholder="Your email" />
            </div>
            <div className="form-group">
              <label className={style.label}>Password</label>
              <br />
              <input type="password" className={style.form} placeholder="Your password" />
            </div><br/>
            <div class="col-md-12 text-center">
              <Button type="submit" href="/" className={style.button}>
                Sign Up
              </Button>
            </div>
            <p className="forgot-password text-right" style={{ textAlign: "center",marginTop:"20px" }}>
              Already have an account?  
              <Button href="/login" style={{color:"#75F991", marginLeft:"2px"}}>
                  Login
              </Button>
            </p>
          </Form>
        </FloatingLabel>
      </Container>
      </div>
    </>
  );
}
