import Icon from "../assets/Icon.png";
import Pizza from "../assets/pizza.png";
import Line from "../assets/garis.png";
import BK from "../assets/BK.png";
import Sbux from "../assets/sbux.png";
import KFC from "../assets/kfc.png";
import Jco from "../assets/jco.png";
import Geprek from "../assets/geprek.png";
import Nasgor from "../assets/nasgor.png";
import Pecel from "../assets/pecel.png";
import Kopi from "../assets/kopi.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function NavBar1() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  return (
    <Navbar style={{ backgroundColor: "#FFC700" }}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Modal.Title>Register</Modal.Title>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show1} onHide={handleClose1}>
        <Modal.Body>
          <Modal.Title>Login</Modal.Title>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose1}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
      <Container>
        <img src={Icon} width="125" alt="logo" />
        <div style={{ float: "right" }}>
          <Button
            style={{
              backgroundColor: "black",
              fontSize: "12px",
              width: "100px",
            }}
            onClick={handleShow}
            className="me-3 px-4 py-1"
          >
            Register
          </Button>
          <Button
            style={{
              backgroundColor: "black",
              fontSize: "12px",
              width: "100px",
            }}
            className="px-4 py-1"
            onClick={handleShow1}
          >
            Login
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}

function Page1() {
  return (
    <div style={{ backgroundColor: "#FFC700", marginBottom: "60px" }}>
      <div className="d-flex justify-content-center align-items-center mx-auto">
        <div className="m-5">
          <h1 className="fw-bold">Are You Hungry?</h1>
          <h1 className="fw-bold">Express Home Deivery</h1>
          <div className="d-flex">
            <img src={Line} alt="pizza" className="mt-5 align-self-start" />
            <p
              style={{ width: "300px", fontSize: "13px", marginTop: "40px" }}
              className="ms-4"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>
        <img src={Pizza} width="400px" alt="pizza" className="m-5" />
      </div>
    </div>
  );
}

function Restaurant() {
  return (
    <div className="my-4 mx-auto" style={{ width: "75%" }}>
      <div>
        <h3 className="fw-bold">Popular Restaurant</h3>
      </div>
      <div className="d-flex justify-content-evenly">
        <div
          className="my-5 p-3 rounded"
          style={{ backgroundColor: "white", width: "23%" }}
        >
          <img src={BK} alt="bk" />
          <span className="fw-bold ms-3" style={{ fontSize: "18px" }}>
            Burger King
          </span>
        </div>
        <div
          className="my-5 p-3 rounded"
          style={{ backgroundColor: "white", width: "23%" }}
        >
          <img src={Sbux} alt="bk" />
          <span className="fw-bold ms-3" style={{ fontSize: "18px" }}>
            Starbucks
          </span>
        </div>
        <div
          className="my-5 p-3 rounded"
          style={{ backgroundColor: "white", width: "23%" }}
        >
          <img src={KFC} alt="bk" />
          <span className="fw-bold ms-3" style={{ fontSize: "18px" }}>
            KFC
          </span>
        </div>
        <div
          className="my-5 p-3 rounded"
          style={{ backgroundColor: "white", width: "23%" }}
        >
          <img src={Jco} alt="bk" />
          <span className="fw-bold ms-3" style={{ fontSize: "18px" }}>
            Jco
          </span>
        </div>
      </div>
    </div>
  );
}

function Near() {
  return (
    <div className="my-4 mx-auto" style={{ width: "75%" }}>
      <div>
        <h3 className="fw-bold">Restaurant Near You</h3>
      </div>
      <div className="d-flex justify-content-evenly">
        <div className="my-5 p-2 rounded">
          <Card style={{ width: "14rem", border: "none" }}>
            <Card.Body>
              <Card.Img variant="top" src={Geprek} />
              <Card.Title
                className="my-3 fw-bold"
                style={{ fontSize: "15px " }}
              >
                Geprek Bensu
              </Card.Title>
              <Card.Subtitle className=" text-muted">0,2 KM</Card.Subtitle>
            </Card.Body>
          </Card>
        </div>
        <div className="my-5 p-2 rounded">
          <Card style={{ width: "14rem", border: "none" }}>
            <Card.Body>
              <Card.Img variant="top" src={Nasgor} />
              <Card.Title
                className="my-3 fw-bold"
                style={{ fontSize: "15px " }}
              >
                Nasi Goreng Mas Rony
              </Card.Title>
              <Card.Subtitle className=" text-muted">0,2 KM</Card.Subtitle>
            </Card.Body>
          </Card>
        </div>
        <div className="my-5 p-2 rounded">
          <Card style={{ width: "14rem", border: "none" }}>
            <Card.Body>
              <Card.Img variant="top" src={Pecel} />
              <Card.Title
                className="my-3 fw-bold"
                style={{ fontSize: "15px " }}
              >
                Pecel Ayam Prambanan
              </Card.Title>
              <Card.Subtitle className=" text-muted">0,2 KM</Card.Subtitle>
            </Card.Body>
          </Card>
        </div>
        <div className="my-5 p-2 rounded">
          <Card style={{ width: "14rem", border: "none" }}>
            <Card.Body>
              <Card.Img variant="top" src={Kopi} />
              <Card.Title
                className="my-3 fw-bold"
                style={{ fontSize: "15px " }}
              >
                Kopi Kenangan
              </Card.Title>
              <Card.Subtitle className=" text-muted">0,2 KM</Card.Subtitle>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

function Page() {
  return (
    <div>
      <NavBar1 />
      <Page1 />
      <Restaurant />
      <Near />
    </div>
  );
}

export default Page;
