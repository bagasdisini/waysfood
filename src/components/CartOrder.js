import Map from "../assets/map.png";
import Minus from "../assets/-.png";
import Bin from "../assets/bin.png";
import Plus from "../assets/+.png";
import Geprek from "../assets/geprek.png";
import Container from "react-bootstrap/Container";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

function Cart({ item, setItem }) {
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

  function Less() {
    if (item.item1Counter > 0) {
      setItem({
        item1Counter: item.item1Counter - 1,
        item1Harga: item.item1Harga - 15000,
        subTotal: item.subTotal - 15000,
        qty: item.qty - 1,
        total: item.total - 15000,
      });
    }
  }

  function Delete() {
    setItem({
      item1Counter: item.item1Counter * 0,
      item1Harga: item.item1Harga * 0,
      subTotal: item.subTotal - 15000 * item.item1Counter,
      qty: item.qty - item.item1Counter,
      total: item.total * 0,
    });
  }

  return (
    <div>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Body>
          <iframe
            width="100%"
            height="400px"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Dumbways%20&t=&z=17&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            title="myFrame"
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{
              width: "30%",
              backgroundColor: "#433434",
              float: "right",
            }}
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            style={{
              width: "30%",
              backgroundColor: "#433434",
              float: "right",
            }}
            onClick={handleClose}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      <Container
        className="d-flex justify-content-center align-items-center mx-auto"
        style={{ marginTop: "10px" }}
      >
        <div className="m-5" style={{ width: "90%" }}>
          <h3 className="fw-bold mb-4">Geprek Bensu</h3>
          <div>
            <p>Delivery Location</p>
            <div className="mb-4">
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Recipient's Location"
                  aria-label="Recipient's location"
                  aria-describedby="basic-addon2"
                  className="py-2"
                />
                <Button
                  style={{
                    width: "25%",
                    backgroundColor: "#433434",
                    border: "none",
                  }}
                  onClick={handleShow}
                >
                  Select on map <img src={Map} alt="map"></img>
                </Button>
              </InputGroup>
            </div>
            <p>Review Your Order</p>
            <div className="d-flex">
              <div style={{ width: "60%" }}>
                <hr style={{ opacity: "100%" }}></hr>
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <img
                      src={Geprek}
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                      }}
                      alt="geprek"
                    ></img>
                    <div className="align-self-center">
                      <p className="ms-3">Paket Geprek</p>

                      <Button
                        style={{
                          width: "0px",
                          height: "0px",
                          backgroundColor: "#EFEFEF",
                          border: "none",
                          marginTop: "-30px",
                          marginLeft: "5px",
                          marginRight: "15px",
                        }}
                        onClick={() => {
                          Less();
                        }}
                      >
                        <img src={Minus} alt="geprek"></img>
                      </Button>
                      <span>{item.item1Counter}</span>
                      <Button
                        style={{
                          width: "0px",
                          height: "0px",
                          backgroundColor: "#EFEFEF",
                          border: "none",
                          marginTop: "-30px",
                          marginLeft: "5px",
                        }}
                        onClick={Add}
                      >
                        <img src={Plus} alt="geprek"></img>
                      </Button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-end">
                    <div>
                      <p className="text-danger">Rp{item.item1Harga}</p>
                      <img
                        src={Bin}
                        alt="sampah"
                        className="ms-5"
                        onClick={() => {
                          Delete();
                        }}
                      ></img>
                    </div>
                  </div>
                </div>
                <hr style={{ opacity: "100%" }}></hr>
                {/* <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <img
                      src={Geprek}
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                      }}
                      alt="geprek"
                    ></img>
                    <div className="align-self-center">
                      <p className="ms-3">Paket Geprek 2</p>

                      <Button
                        style={{
                          width: "0px",
                          height: "0px",
                          backgroundColor: "#EFEFEF",
                          border: "none",
                          marginTop: "-30px",
                          marginLeft: "5px",
                          marginRight: "15px",
                        }}
                        onClick={() => {
                          Less1();
                        }}
                      >
                        <img src={Minus} alt="geprek"></img>
                      </Button>
                      <span>{item.item2Counter}</span>
                      <Button
                        style={{
                          width: "0px",
                          height: "0px",
                          backgroundColor: "#EFEFEF",
                          border: "none",
                          marginTop: "-30px",
                          marginLeft: "5px",
                        }}
                        onClick={Add1}
                      >
                        <img src={Plus} alt="geprek"></img>
                      </Button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-end">
                    <div>
                      <p className="text-danger">Rp{item.item2Harga}</p>
                      <img
                        src={Bin}
                        alt="sampah"
                        className="ms-5"
                        onClick={() => {
                          Delete1();
                        }}
                      ></img>
                    </div>
                  </div>
                </div>
                <hr style={{ opacity: "100%" }}></hr> */}
              </div>
              <div style={{ width: "40%" }} className="ms-5 ">
                <hr style={{ opacity: "100%" }}></hr>
                <div className="d-flex justify-content-between">
                  <div>
                    <p>Subtotal</p>
                    <p>Qty</p>
                    <p>Ongkir</p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p className="text-danger">Rp{item.subTotal}</p>
                    <p>{item.qty}</p>
                    <p className="text-danger">Rp10.000</p>
                  </div>
                </div>
                <hr style={{ marginTop: "-3px", opacity: "100%" }}></hr>
                <div className="d-flex justify-content-between">
                  <p className="text-danger">Total</p>
                  <p className="text-danger">Rp{item.total + 10000}</p>
                </div>
              </div>
            </div>
            <Button
              style={{
                float: "right",
                backgroundColor: "#433434",
                border: "none",
              }}
              className="px-5"
            >
              See How Far ?
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Cart;
