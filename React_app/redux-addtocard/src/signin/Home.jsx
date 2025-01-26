import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Sing_img from "./Sing_img";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
  });

  const getdata = (e) => {
    const { value, name } = e.target;
    setInpval((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addData = (e) => {
    e.preventDefault();
    const { name, email, date, password } = inpval;

    if (!name.trim()) {
      alert("Please enter your name");
    } else if (!email.trim()) {
      alert("Please enter your email");
    } else if (!email.includes("@")) {
      alert("Please enter a valid email address");
    } else if (!date.trim()) {
      alert("Please enter your date of birth");
    } else if (!password.trim()) {
      alert("Please enter your password");
    } else if (password.length < 5) {
      alert("Password should be at least 5 characters");
    } else {
      const storedData = JSON.parse(localStorage.getItem("useryoutube")) || [];
      localStorage.setItem(
        "useryoutube",
        JSON.stringify([...storedData, inpval])
      );
      alert("Your data is added");
    }
  };

  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign Up</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicText">
                <Form.Control
                  type="text"
                  onChange={getdata}
                  name="name"
                  placeholder="Enter Your Name"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  onChange={getdata}
                  name="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicDate">
                <Form.Control type="date" onChange={getdata} name="date" />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  onChange={getdata}
                  name="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Button
                variant="primary"
                className="col-lg-6"
                onClick={addData}
                style={{ background: "rgb(67,185,127)" }}
                type="submit"
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3">
              Already Have an Account{" "}
              <span>
                <NavLink to="/LoginUser">SignIn</NavLink>
              </span>
            </p>
          </div>
          <Sing_img />
        </section>
      </div>
    </>
  );
};

export default Home;
