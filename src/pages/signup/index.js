import React from "react";
import { FloatingLabel, Form, Button, Container } from "react-bootstrap";
import style from "./signup.module.css";
import '../../App.css'


const SignUp = () => {

  // const emailEl = useRef();
  // const imageEl = useRef();
  // const fullnameEl = useRef();
  // const passwordEl = useRef();
  // const confirmPasswordEl = useRef();

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
              <label className={style.label}>Phone</label>
              <br />
              <input type="tel" className={style.form}  placeholder="Your phone number" />
            </div>
            <div className="form-group">
              <label className={style.label}>Password</label>
              <br />
              <input type="password" className={style.form} placeholder="Your password" />
            </div>
            <div className="form-group">
              <label className={style.label}>Confirm Password</label>
              <br />
              <input type="password" className={style.form} placeholder="Your confirm password" />
            </div>
            <br/>
            <div class="col-md-12 text-center">
              <Button type="submit" href="/" className={style.btn}>
                Sign Up
              </Button>
            </div>
            <p className="forgot-password text-right" style={{ textAlign: "center",marginTop:"20px" }}>
              Already have an account?  
              <a href="/login" style={{color:"#75F991", marginLeft:"2px"}}>
                  Login
              </a>
            </p>
          </Form>
        </FloatingLabel>
      </Container>
      </div>
    </>
  );
}

export default SignUp;
