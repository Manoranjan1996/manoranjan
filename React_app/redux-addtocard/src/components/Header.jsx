import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "@mui/material/Menu";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DLT } from "../redux/actions/Action";
import Table from "react-bootstrap/esm/Table";
import gif from "/cart.gif";

const Header = () => {
  const [price, setPrice] = useState(0);
  const getdata = useSelector((state) => state.cartreducer.carts);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const dlt = (id) => dispatch(DLT(id));

  const total = () => {
    let totalPrice = 0;
    getdata.forEach((ele) => (totalPrice += ele.price * ele.qnty));
    setPrice(totalPrice);
  };

  useEffect(() => total(), [getdata]);

  return (
    <Navbar bg="dark" expand="lg" style={{ height: "70px" }}>
      <Container className="d-flex justify-content-between align-items-center">
        {/* Left Section: Add to Cart and Home */}
        <div className="d-flex align-items-center">
          <NavLink
            to="/"
            className="text-decoration-none text-light me-4"
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              whiteSpace: "nowrap",
            }}
          >
            Add to Cart
          </NavLink>
          <NavLink
            to="/"
            className="text-decoration-none text-light"
            style={{
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            Home
          </NavLink>
        </div>

        {/* Right Section: Log In and Cart Icon */}
        <div className="d-flex align-items-center">
          <NavLink
            to="/login"
            className="text-decoration-none text-light me-4"
            style={{
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            Log In
          </NavLink>
          <Badge
            badgeContent={getdata.length}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            style={{
              cursor: "pointer",
            }}
          >
            <i
              className="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: "25px" }}
            ></i>
          </Badge>
        </div>
      </Container>

      {/* Cart Menu */}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {getdata.length ? (
          <div className="card_details" style={{ width: "24rem", padding: 10 }}>
            <Table>
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Restaurant Name</th>
                </tr>
              </thead>
              <tbody>
                {getdata.map((e) => (
                  <tr key={e.id}>
                    <td>
                      <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                        <img
                          src={e.imgdata}
                          style={{ width: "5rem", height: "5rem" }}
                          alt=""
                        />
                      </NavLink>
                    </td>
                    <td>
                      <span style={{ display: "block", marginBottom: "5px" }}>
                        {e.rname}
                      </span>
                      <span style={{ display: "block", marginBottom: "5px" }}>
                        Price: ₹{e.price}
                      </span>
                      <span style={{ display: "block", marginBottom: "5px" }}>
                        Quantity: {e.qnty}
                      </span>
                      <span
                        style={{
                          color: "red",
                          fontSize: 20,
                          cursor: "pointer",
                        }}
                        onClick={() => dlt(e.id)}
                      >
                        <i className="fas fa-trash smalltrash"></i>
                      </span>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="3">
                    <div>Total: ₹{price}</div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        ) : (
          <div
            className="card_details d-flex justify-content-center align-items-center"
            style={{ width: "24rem", padding: 10, position: "relative" }}
          >
            <i
              className="fas fa-close smallclose"
              onClick={handleClose}
              style={{
                position: "absolute",
                top: 2,
                right: 20,
                fontSize: 23,
                cursor: "pointer",
              }}
            ></i>
            <p style={{ fontSize: 22 }}>Your cart is empty</p>
            <img
              src={gif}
              alt="Cart Empty"
              className="emptycart_img"
              style={{ width: "5rem", padding: 10 }}
            />
          </div>
        )}
      </Menu>
    </Navbar>
  );
};

export default Header;
