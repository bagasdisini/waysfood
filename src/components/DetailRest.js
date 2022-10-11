import Icon from "../assets/Icon.png";
import Cart from "../assets/cart.png";
import PP from "../assets/fotoprofile.png";
import Geprek from "../assets/geprek.png";
import Profile from "../assets/profile.png";
import Logout from "../assets/export.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Detail1() {
  return (
    <div>
      <Navbar style={{ backgroundColor: "#FFC700" }}>
        <Container>
          <img src={Icon} width="125" alt="logo" />
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
                <Dropdown.Item>
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
        </Container>
      </Navbar>

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
                <Card.Title>Paket Geprek</Card.Title>
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
              <Card.Img variant="top" src={Geprek} />
              <Card.Body className="py-3 px-1">
                <Card.Title>Paket Geprek</Card.Title>
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
              <Card.Img variant="top" src={Geprek} />
              <Card.Body className="py-3 px-1">
                <Card.Title>Paket Geprek</Card.Title>
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
              <Card.Img variant="top" src={Geprek} />
              <Card.Body className="py-3 px-1">
                <Card.Title>Paket Geprek</Card.Title>
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
              <Card.Img variant="top" src={Geprek} />
              <Card.Body className="py-3 px-1">
                <Card.Title>Paket Geprek</Card.Title>
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
              <Card.Img variant="top" src={Geprek} />
              <Card.Body className="py-3 px-1">
                <Card.Title>Paket Geprek</Card.Title>
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
              <Card.Img variant="top" src={Geprek} />
              <Card.Body className="py-3 px-1">
                <Card.Title>Paket Geprek</Card.Title>
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
              <Card.Img variant="top" src={Geprek} />
              <Card.Body className="py-3 px-1">
                <Card.Title>Paket Geprek</Card.Title>
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
          </div>
        </div>
      </div>
    </div>
  );
}

function Detail() {
  return (
    <div>
      <Detail1 />
    </div>
  );
}

export default Detail;
