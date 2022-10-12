import Icon from "../assets/Icon.png";
import Cart from "../assets/cart.png";
import PP from "../assets/fotoprofile.png";
import Profile from "../assets/profile.png";
import Map from "../assets/map.png";
import Minus from "../assets/-.png";
import Bin from "../assets/bin.png";
import Plus from "../assets/+.png";
import Geprek from "../assets/geprek.png";
import Logout from "../assets/export.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

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
                      >
                        <img src={Minus} alt="geprek"></img>
                      </Button>
                      <span>1</span>
                      <Button
                        style={{
                          width: "0px",
                          height: "0px",
                          backgroundColor: "#EFEFEF",
                          border: "none",
                          marginTop: "-30px",
                          marginLeft: "5px",
                        }}
                      >
                        <img src={Plus} alt="geprek"></img>
                      </Button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-end">
                    <div>
                      <p className="text-danger">Rp15.000</p>
                      <img src={Bin} alt="sampah" className="ms-5"></img>
                    </div>
                  </div>
                </div>
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
                      >
                        <img src={Minus} alt="geprek"></img>
                      </Button>
                      <span>1</span>
                      <Button
                        style={{
                          width: "0px",
                          height: "0px",
                          backgroundColor: "#EFEFEF",
                          border: "none",
                          marginTop: "-30px",
                          marginLeft: "5px",
                        }}
                      >
                        <img src={Plus} alt="geprek"></img>
                      </Button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-end">
                    <div>
                      <p className="text-danger">Rp15.000</p>
                      <img src={Bin} alt="sampah" className="ms-5"></img>
                    </div>
                  </div>
                </div>
                <hr style={{ opacity: "100%" }}></hr>
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
                    <p className="text-danger">Rp15.000</p>
                    <p>2</p>
                    <p className="text-danger">Rp10.000</p>
                  </div>
                </div>
                <hr style={{ marginTop: "-3px", opacity: "100%" }}></hr>
                <div className="d-flex justify-content-between">
                  <p className="text-danger">Total</p>
                  <p className="text-danger">Rp40.000</p>
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

function Detail() {
  return (
    <div>
      <Detail1 />
    </div>
  );
}

export default Detail;
