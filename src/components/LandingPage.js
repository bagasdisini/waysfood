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
import Cart from "../assets/cart.png";
import PP from "../assets/fotoprofile.png";
import Profile from "../assets/profile.png";
import Product from "../assets/product.png";
import Logout from "../assets/export.png";
import Detail from "./DetailRest";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";

function Page1() {
  const [state, setState] = useState({
    isLogin: false,
    isLoginUser: false,
    isLoginAdmin: false,

    user: {
      email: "user@mail.com",
      password: "",
    },

    admin: {
      email: "admin@mail.com",
      password: "",
    },
  });

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;

    if (email === state.user.email) {
      setState({
        isLogin: true,
        isLoginUser: true,
      });
    } else if (email === state.admin.email) {
      setState({
        isLogin: true,
        isLoginAdmin: true,
      });
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();

    setState({
      isLogin: false,
      isLoginAdmin: false,
    });
  };

  return (
    <div>
      <Navbar style={{ backgroundColor: "#FFC700" }}>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <Form className="p-3">
              <h3 className="mb-4 fw-bold" style={{ color: "#FFC700" }}>
                Register
              </h3>
              <Form.Group className="mb-3" controlId="email">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  style={{ backgroundColor: "#F4F4F4" }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  style={{ backgroundColor: "#F4F4F4" }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="name">
                <Form.Control
                  type="text"
                  placeholder="Full Name"
                  style={{ backgroundColor: "#F4F4F4" }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="gender"
                style={{ backgroundColor: "#F4F4F4" }}
              >
                <Form.Select style={{ backgroundColor: "#F4F4F4" }}>
                  <option hidden>Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="phone">
                <Form.Control
                  type="number"
                  placeholder="Phone"
                  style={{ backgroundColor: "#F4F4F4" }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="type">
                <Form.Select style={{ backgroundColor: "#F4F4F4" }}>
                  <option>As User</option>
                  <option>As Partner</option>
                </Form.Select>
              </Form.Group>
              <Button
                type="submit"
                style={{ width: "100%", background: "#433434", border: "none" }}
              >
                Register
              </Button>
            </Form>
            <div className="d-flex justify-content-center mx-auto">
              <p>
                Already have an account ? Click{" "}
                <button
                  onClick={() => {
                    handleShow1();
                    handleClose();
                  }}
                  style={{ border: "none", backgroundColor: "white" }}
                  className="p-0"
                >
                  here
                </button>
              </p>
            </div>
          </Modal.Body>
        </Modal>

        <Modal show={show1} onHide={handleClose1}>
          <Modal.Body>
            <Form className="p-3" onSubmit={handleOnSubmit}>
              <h3 className="mb-4 fw-bold" style={{ color: "#FFC700" }}>
                Login
              </h3>
              <Form.Group className="mb-3" controlId="email">
                <Form.Control
                  id="email"
                  type="email"
                  placeholder="Email"
                  style={{ backgroundColor: "#F4F4F4" }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Control
                  id="password"
                  type="password"
                  placeholder="Password"
                  style={{ backgroundColor: "#F4F4F4" }}
                />
              </Form.Group>
              <Button
                type="submit"
                style={{ width: "100%", background: "#433434", border: "none" }}
                onClick={() => {
                  handleClose1();
                }}
              >
                Login
              </Button>
            </Form>
            <div className="d-flex justify-content-center mx-auto">
              <p>
                Don't have an account ? Click{" "}
                <button
                  onClick={() => {
                    handleShow();
                    handleClose1();
                  }}
                  style={{ border: "none", backgroundColor: "white" }}
                  className="p-0"
                >
                  here
                </button>
              </p>
            </div>
          </Modal.Body>
        </Modal>

        <Container>
          <img src={Icon} width="125" alt="logo" />
          {state.isLoginUser ? (
            <div
              style={{ float: "right", marginRight: "70px" }}
              className="d-flex align-items-center"
            >
              <img
                src={Cart}
                alt="logo"
                width="25px"
                height="25px"
                className="me-2"
              />
              <Dropdown style={{ width: "10px" }}>
                <Dropdown.Toggle
                  style={{
                    width: "10px",
                    backgroundColor: "#FFC700",
                    border: "none",
                  }}
                >
                  <img src={PP} alt="logo" width="40px" height="40px" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">
                    <img
                      src={Profile}
                      alt="PP"
                      width="15px"
                      height="15px"
                      className="me-1"
                    />{" "}
                    Profile
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleLogout}>
                    <img
                      src={Logout}
                      alt="PP"
                      width="15px"
                      height="15px"
                      className="me-1"
                    />{" "}
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          ) : state.isLoginAdmin ? (
            <div
              style={{ float: "right", marginRight: "70px" }}
              className="d-flex align-items-center"
            >
              <img
                src={Cart}
                alt="logo"
                width="25px"
                height="25px"
                className="me-2"
              />
              <Dropdown style={{ width: "10px" }}>
                <Dropdown.Toggle
                  style={{
                    width: "10px",
                    backgroundColor: "#FFC700",
                    border: "none",
                  }}
                >
                  <img src={PP} alt="logo" width="40px" height="40px" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">
                    <img
                      src={Profile}
                      alt="PP"
                      width="15px"
                      height="15px"
                      className="me-1"
                    />{" "}
                    Profile Partner
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <img
                      src={Product}
                      alt="PP"
                      width="15px"
                      height="15px"
                      className="me-1"
                    />{" "}
                    Add Product
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleLogout}>
                    <img
                      src={Logout}
                      alt="PP"
                      width="15px"
                      height="15px"
                      className="me-1"
                    />{" "}
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          ) : (
            <div style={{ float: "right" }}>
              <Button
                style={{
                  backgroundColor: "#433434",
                  fontSize: "12px",
                  width: "100px",
                  border: "none",
                }}
                onClick={handleShow}
                className="me-3 px-4 py-1"
              >
                Register
              </Button>
              <Button
                style={{
                  backgroundColor: "#433434",
                  fontSize: "12px",
                  width: "100px",
                  border: "none",
                }}
                className="px-4 py-1"
                onClick={handleShow1}
              >
                Login
              </Button>
            </div>
          )}
        </Container>
      </Navbar>

      <div
        className="d-flex justify-content-center align-items-center mx-auto"
        style={{ backgroundColor: "#FFC700", marginBottom: "60px" }}
      >
        <div className="m-5">
          <h1 className="fw-bold">Are You Hungry?</h1>
          <h1 className="fw-bold">Express Home Delivery</h1>
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

      <div className="my-4 mx-auto" style={{ width: "75%" }}>
        <div>
          <h3 className="fw-bold">Restaurant Near You</h3>
        </div>

        {state.isLogin ? (
          <div className="d-flex justify-content-evenly">
            <div className="my-5 p-2 rounded">
              <a href={Detail}>
                <Card style={{ width: "14rem", border: "none" }}>
                  <Card.Body>
                    <Card.Img variant="top" src={Geprek} />
                    <Card.Title
                      className="my-3 fw-bold"
                      style={{ fontSize: "15px " }}
                    >
                      Geprek Bensu
                    </Card.Title>
                    <Card.Subtitle className=" text-muted">
                      0,2 KM
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </a>
            </div>
            <div className="my-5 p-2 rounded">
              <a href="/">
                <Card style={{ width: "14rem", border: "none" }}>
                  <Card.Body>
                    <Card.Img variant="top" src={Nasgor} />
                    <Card.Title
                      className="my-3 fw-bold"
                      style={{ fontSize: "15px " }}
                    >
                      Nasi Goreng Mas Rony
                    </Card.Title>
                    <Card.Subtitle className=" text-muted">
                      0,6 KM
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </a>
            </div>
            <div className="my-5 p-2 rounded">
              <a href="/">
                <Card style={{ width: "14rem", border: "none" }}>
                  <Card.Body>
                    <Card.Img variant="top" src={Pecel} />
                    <Card.Title
                      className="my-3 fw-bold"
                      style={{ fontSize: "15px " }}
                    >
                      Pecel Ayam Prambanan
                    </Card.Title>
                    <Card.Subtitle className=" text-muted">
                      0,6 KM
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </a>
            </div>
            <div className="my-5 p-2 rounded">
              <a href="/">
                <Card style={{ width: "14rem", border: "none" }}>
                  <Card.Body>
                    <Card.Img variant="top" src={Kopi} />
                    <Card.Title
                      className="my-3 fw-bold"
                      style={{ fontSize: "15px " }}
                    >
                      Kopi Kenangan
                    </Card.Title>
                    <Card.Subtitle className=" text-muted">
                      1,8 KM
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </a>
            </div>
          </div>
        ) : (
          <div className="d-flex justify-content-evenly">
            <div className="my-5 p-2 rounded">
              <button onClick={handleShow1} style={{ border: "none" }}>
                <Card style={{ width: "14rem", border: "none" }}>
                  <Card.Body>
                    <Card.Img variant="top" src={Geprek} />
                    <Card.Title
                      className="my-3 fw-bold"
                      style={{ fontSize: "15px " }}
                    >
                      Geprek Bensu
                    </Card.Title>
                    <Card.Subtitle className=" text-muted">
                      0,2 KM
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </button>
            </div>
            <div className="my-5 p-2 rounded">
              <button onClick={handleShow1} style={{ border: "none" }}>
                <Card style={{ width: "14rem", border: "none" }}>
                  <Card.Body>
                    <Card.Img variant="top" src={Nasgor} />
                    <Card.Title
                      className="my-3 fw-bold"
                      style={{ fontSize: "15px " }}
                    >
                      Nasi Goreng Mas Rony
                    </Card.Title>
                    <Card.Subtitle className=" text-muted">
                      0,6 KM
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </button>
            </div>
            <div className="my-5 p-2 rounded">
              <button onClick={handleShow1} style={{ border: "none" }}>
                <Card style={{ width: "14rem", border: "none" }}>
                  <Card.Body>
                    <Card.Img variant="top" src={Pecel} />
                    <Card.Title
                      className="my-3 fw-bold"
                      style={{ fontSize: "15px " }}
                    >
                      Pecel Ayam Prambanan
                    </Card.Title>
                    <Card.Subtitle className=" text-muted">
                      0,6 KM
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </button>
            </div>
            <div className="my-5 p-2 rounded">
              <button onClick={handleShow1} style={{ border: "none" }}>
                <Card style={{ width: "14rem", border: "none" }}>
                  <Card.Body>
                    <Card.Img variant="top" src={Kopi} />
                    <Card.Title
                      className="my-3 fw-bold"
                      style={{ fontSize: "15px " }}
                    >
                      Kopi Kenangan
                    </Card.Title>
                    <Card.Subtitle className=" text-muted">
                      1,8 KM
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Page() {
  return (
    <div>
      <Page1 />
    </div>
  );
}

export default Page;
