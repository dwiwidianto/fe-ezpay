import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "../../App.css";
import { Navbar, Footer } from "../../components";

export default function Home() {
  return (
    <>
      <Navbar />
      <br/>
      <Carousel>
        <Carousel.Item interval={700}>
          <img
            className="d-block w-100"
            height="500px"
            src="https://media.istockphoto.com/photos/online-payment-button-on-computer-keyboard-picture-id1169729429?k=20&m=1169729429&s=612x612&w=0&h=sKckowvQZtZCeA-_Srq6YtSIgWrH7rPZOwsnS4Wsyc0="
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Ezpay</h3>
            <p>Payment Point Online Bank</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            height="500px"
            src="https://media.istockphoto.com/photos/financial-application-on-smartphone-picture-id1328960923?k=20&m=1328960923&s=612x612&w=0&h=aXt7Q-i-GGtT0BYCTi4sdfAdA6SYesmyqFGMHVrc7ug="
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Bayar Tagihan</h3>
            <p>kamu disini</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height="500px"
            src="https://media.istockphoto.com/photos/flying-calendar-checkbook-with-coins-alarm-clock-and-credit-card-on-picture-id1317509230?b=1&k=20&m=1317509230&s=170667a&w=0&h=D7KCwhEHuGrShKDrKkZW8naZzqttDFjMmd9JrRlhgIA="
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Proses cepat</h3>
            <p>
              dan aman
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Footer />
    </>
  );
}
