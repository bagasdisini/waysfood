import Geprek from "../assets/geprek.png";
import GeprekKeju from "../assets/geprekkeju.png";
import GeprekLeleh from "../assets/geprekleleh.png";
import SambalMatah from "../assets/sambalmatah.png";
import MieGeprek from "../assets/miegeprek.png";
import MieGeprekKeju from "../assets/miegeprekkeju.png";
import MieLeleh from "../assets/mieayamleleh.png";
import MieTelurAsin from "../assets/mietelurasin.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

function Detail({ item, setItem }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Add = () => {
    setItem({
      item1Counter: item.item1Counter + 1,
      item1Harga: item.item1Harga + 15000,
      subTotal: item.subTotal + 15000,
      qty: item.qty + 1,
      total: item.total + 15000,
    });
  };

  return (
    <div>
      <ToastContainer position="top-center" className="mt-5">
        <Toast
          onClose={() => setShow(false)}
          show={show}
          delay={800}
          autohide
          onHide={handleClose}
          className="bg-primary text-white"
        >
          <Toast.Body>Berhasil menambahkan ke keranjang</Toast.Body>
        </Toast>
      </ToastContainer>

      <div
        className="d-flex justify-content-center align-items-center mx-auto"
        style={{ marginTop: "10px" }}
      >
        <div className="m-5" style={{ width: "70%" }}>
          <h2 className="fw-bold mb-4">Geprek Bensu, Menus</h2>
          <div className="d-flex justify-content-between flex-wrap">
            <Card style={{ width: "14rem" }} className="p-2 mb-3">
              <Card.Img variant="top" src={Geprek} />
              <Card.Body className="py-3 px-1">
                <Card.Title className="fs-6">Paket Geprek</Card.Title>
                <Card.Text className="text-danger">Rp 15.000</Card.Text>
                <Button
                  style={{
                    marginBottom: "-10px",
                    width: "100%",
                    backgroundColor: "#FFC700",
                    border: "none",
                  }}
                  className="py-1 text-dark"
                  onClick={() => {
                    Add();
                    handleShow();
                  }}
                >
                  Order
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "14rem" }} className="p-2 mb-3">
              <Card.Img variant="top" src={GeprekKeju} />
              <Card.Body className="py-3 px-1">
                <Card.Title className="fs-6">Paket Geprek Keju</Card.Title>
                <Card.Text className="text-danger">Rp 20.000</Card.Text>
                <Button
                  style={{
                    marginBottom: "-10px",
                    width: "100%",
                    backgroundColor: "#FFC700",
                    border: "none",
                  }}
                  className="py-1 text-dark"
                >
                  Order
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "14rem" }} className="p-2 mb-3">
              <Card.Img variant="top" src={GeprekLeleh} />
              <Card.Body className="py-3 px-1">
                <Card.Title className="fs-6">Paket Geprek Leleh</Card.Title>
                <Card.Text className="text-danger">Rp 25.000</Card.Text>
                <Button
                  style={{
                    marginBottom: "-10px",
                    width: "100%",
                    backgroundColor: "#FFC700",
                    border: "none",
                  }}
                  className="py-1 text-dark"
                >
                  Order
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "14rem" }} className="p-2 mb-3">
              <Card.Img variant="top" src={SambalMatah} />
              <Card.Body className="py-3 px-1">
                <Card.Title className="fs-6">Paket Sambel Matah</Card.Title>
                <Card.Text className="text-danger">Rp 15.000</Card.Text>
                <Button
                  style={{
                    marginBottom: "-10px",
                    width: "100%",
                    backgroundColor: "#FFC700",
                    border: "none",
                  }}
                  className="py-1 text-dark"
                >
                  Order
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "14rem" }} className="p-2 mb-3">
              <Card.Img variant="top" src={MieGeprek} />
              <Card.Body className="py-3 px-1">
                <Card.Title className="fs-6">Mie ayam Geprek</Card.Title>
                <Card.Text className="text-danger">Rp 17.000</Card.Text>
                <Button
                  style={{
                    marginBottom: "-10px",
                    width: "100%",
                    backgroundColor: "#FFC700",
                    border: "none",
                  }}
                  className="py-1 text-dark"
                >
                  Order
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "14rem" }} className="p-2 mb-3">
              <Card.Img variant="top" src={MieGeprekKeju} />
              <Card.Body className="py-3 px-1">
                <Card.Title className="fs-6">Mie ayam Geprek Keju</Card.Title>
                <Card.Text className="text-danger">Rp 22.000</Card.Text>
                <Button
                  style={{
                    marginBottom: "-10px",
                    width: "100%",
                    backgroundColor: "#FFC700",
                    border: "none",
                  }}
                  className="py-1 text-dark"
                >
                  Order
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "14rem" }} className="p-2 mb-3 d-flex flex-column">
              <Card.Img variant="top" src={MieLeleh} />
              <Card.Body className="py-3 px-1">
                <Card.Title className="fs-6">Mie Ayam Leleh</Card.Title>
                <Card.Text className="text-danger">Rp 27.000</Card.Text>
                <Button
                  style={{
                    width: "100%",
                    backgroundColor: "#FFC700",
                    border: "none",
                  }}
                  className="py-1 text-dark"
                >
                  Order
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "14rem" }} className="p-2 mb-3">
              <Card.Img variant="top" src={MieTelurAsin} />
              <Card.Body className="py-3 px-1">
                <Card.Title className="fs-6">Mie Ayam Telur Asin</Card.Title>
                <Card.Text className="text-danger">Rp 22.000</Card.Text>
                <Button
                  style={{
                    marginBottom: "-10px",
                    width: "100%",
                    backgroundColor: "#FFC700",
                    border: "none",
                    float: "bottom"
                  }}
                  className="py-1 text-dark"
                >
                  Order
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
