import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../../App.css";
import { Navbar } from "../../components";

export default function History() {
  const { accessToken } = useSelector((state) => state.auth);

  const [historyTransaction, setHistoryTransaction] = useState([]);
  const [error, setError] = useState([]);

  const fetchHistory = async () => {
    let res = await axios.get("http://http://172.104.61.239/v1/user/transactions", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const { status, err, data } = res.data;
    if (status === "success") {
      setHistoryTransaction(data);
    } else if (status === "fail") {
      setError(err);
    }
  };
  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <>
      <Navbar />
      <Container className="history">
        <h1 className="text-center text-white my-5">History Transaction</h1>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Produk</th>
              <th>Tipe</th>
              <th>No Tagihan</th>
              <th>Nominal</th>
              <th>Kuantitas</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {historyTransaction.map((e) => {
              return (
                <tr>
                  <td>{e.product.name}</td>
                  <td>{e.type === "" ? "-" : e.type}</td>
                  <td>{e.billNumber}</td>
                  <td>{e.nominal}</td>
                  <td>{e.quantity === 0 ? "-" : e.quantity}</td>
                  <td>{e.total}</td>
                  <td>{e.status}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
