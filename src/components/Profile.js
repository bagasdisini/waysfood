import Icon from "../assets/Icon.png";
import Cart from "../assets/cart.png";
import PP from "../assets/fotoprofile.png";
import PP1 from "../assets/fotoprofile1.png";
import Profile from "../assets/profile.png";
import Logout from "../assets/export.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

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
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <div className="d-flex flex-column">
                <h3 className="fw-bold mb-4">My Profile</h3>
                <img src={PP1} width="150" alt="logo" className="mb-4" />
                <Button style={{ backgroundColor: "#433434", border: "none" }}>
                  Edit Profile
                </Button>
              </div>
              <div className="ms-4" style={{ marginTop: "55px" }}>
                <p style={{ color: "#613D2B" }}>Full Name</p>
                <p style={{ marginTop: "-12px" }}>Andi</p>
                <p style={{ color: "#613D2B" }}>Email</p>
                <p style={{ marginTop: "-12px" }}>andigans@gmail.com</p>
                <p style={{ color: "#613D2B" }}>Phone</p>
                <p style={{ marginTop: "-12px" }}>083896833122</p>
              </div>
            </div>
            <div style={{ width: "45%" }}>
              <h3 className="fw-bold mb-4">History Transaction</h3>
              <div
                style={{ backgroundColor: "white" }}
                className="p-3 d-flex justify-content-between"
              >
                <div>
                  <p className="fw-bold">Geprek Bensu</p>
                  <p style={{ marginTop: "-12px", fontSize: "13px" }}>
                    <strong>Saturday</strong>, 12 March 2021
                  </p>
                  <p
                    style={{ fontSize: "13px", marginBottom: "0px" }}
                    className="fw-bold"
                  >
                    Total : Rp 45.000
                  </p>
                </div>
                <div>
                  <img src={Icon} width="130" alt="logo" />
                  <br></br>
                  <Button
                    className="py-0 px-5"
                    style={{
                      fontSize: "12px",
                      marginBottom: "-35px",
                      backgroundColor: "#E5FFF2",
                      color: "#00FF47",
                      border: "none",
                    }}
                  >
                    Finished
                  </Button>
                </div>
              </div>
            </div>
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
