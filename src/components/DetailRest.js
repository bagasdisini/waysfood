import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import { Foods } from "../data/Foods";

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
          {Foods.map((item, index) => (
            <Card style={{ width: "14rem" }} className="p-2 mb-3" key={index}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body className="py-3 px-1">
                <Card.Title className="fs-6">{item.name}</Card.Title>
                <Card.Text className="text-danger">{item.price}</Card.Text>
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
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
