import Icon from "../assets/Icon.png";
import Cart from "../assets/cart.png";
import PP from "../assets/fotoprofile.png";
import Profile from "../assets/profile.png";
import Logout from "../assets/export.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Map from "../assets/map.png";

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
          <div>
            <h3 className="fw-bold mb-4">Edit Profile Partner</h3>
            <div>
              <div className="d-flex justify-content-between">
                <InputGroup className="mb-3" style={{ width: "69%" }}>
                  <Form.Control
                    placeholder="Name Partner"
                    aria-label="Partner"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                <InputGroup className="mb-3" style={{ width: "30%" }}>
                  <Form.Control
                    placeholder="Attach Image"
                    aria-label="Image"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </div>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Phone"
                  aria-label="Phone"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <div className="d-flex justify-content-between">
                <InputGroup className="mb-3" style={{ width: "69%" }}>
                  <Form.Control
                    placeholder="Location"
                    aria-label="Location"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                <Button
                  className="mb-3"
                  style={{ width: "30%", backgroundColor: "#433434" }}
                >
                  Select On Map <img src={Map} alt="map"></img>
                </Button>
              </div>
            </div>
            <Button
              className="mt-5"
              style={{
                width: "30%",
                backgroundColor: "#433434",
                float: "right",
              }}
            >
              Save
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

function EditProfile() {
  return (
    <div>
      <Detail1 />
    </div>
  );
}

export default EditProfile;
