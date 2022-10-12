import Icon from "../assets/Icon.png";
import Cart from "../assets/cart.png";
import PP from "../assets/fotoprofile.png";
import Profile from "../assets/profile.png";
import Logout from "../assets/export.png";
import Checked from "../assets/checked.png";
import Cancel from "../assets/cancel.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Table from "react-bootstrap/Table";
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
          <div>
            <h3 className="fw-bold mb-4">Income Transaction</h3>
            <div>
              <Table bordered hover style={{ border: "1px" }}>
                <thead style={{ backgroundColor: "#E5E5E5" }}>
                  <tr >
                    <th>No</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Products Order</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody style={{ backgroundColor: "white" }}>
                  <tr>
                    <td>1</td>
                    <td>Sugeng No Pants</td>
                    <td>Cileungsi</td>
                    <td>Pkaket Geprek, Paket ke..</td>
                    <td className="text-warning">Waiting Approve</td>
                    <td className="d-flex justify-content-evenly p-1"><Button className="py-1 px-3 bg-danger border-0">Cancel</Button><Button className="py-1 px-3 bg-success border-0">Approve</Button></td>
                  </tr>
                  <tr>
                  <td>2</td>
                    <td>Haris Gams</td>
                    <td>Serang</td>
                    <td>Pkaket Geprek, Paket ke..</td>
                    <td className="text-success">Success</td>
                    <td className="d-flex justify-content-center"><img src={Checked} alt="centang"></img></td>
                  </tr>
                  <tr>
                  <td>3</td>
                    <td>Aziz Union</td>
                    <td>Bekasi</td>
                    <td>Pkaket Geprek, Paket ke..</td>
                    <td className="text-danger">Cancel</td>
                    <td className="d-flex justify-content-center"><img src={Cancel} alt="cancel"></img></td>
                  </tr>
                  <tr>
                  <td>4</td>
                    <td>Lae Tanjung Balai</td>
                    <td>Tanjung Balai</td>
                    <td>Pkaket Geprek, Paket ke..</td>
                    <td className="text-primary">On The Way</td>
                    <td className="d-flex justify-content-center"><img src={Checked} alt="centang"></img></td>
                  </tr>
                </tbody>
              </Table>
            </div>
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
