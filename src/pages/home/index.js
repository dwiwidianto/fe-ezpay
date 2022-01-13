import React from "react";
import "../../App.css";
import { Navbar, Footer } from "../../components";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="home">
        <h1>Dashboard</h1>
      </div>
      <Footer />
    </>
  );
}
