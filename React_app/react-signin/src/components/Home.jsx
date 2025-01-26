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
  const [data, setData] = useState([]);
  console.log(inpval);

  const getdata = (e) => {
    // console.log(e);
    const { value, name } = e.target;
    // console.log(value, name);

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };
  const addData = (e) => {
    e.preventDefault();
    const { name, email, date, password } = inpval;
    if (name === "") {
      alert("Please enter your name");
    } else if (email === "") {
      alert("Please enter your email");
    } else if (!email.includes("@")) {
      alert("Please enter your Correct email address");
    } else if (date === "") {
      alert("Please enter your date of date");
    } else if (password === "") {
      alert("Please enter your password");
    } else if (password.length < 5) {
      alert("Password should be at least 5 characters");
    } else {
      console.log("Your data is added");

      localStorage.setItem("useryoutube", JSON.stringify([...data, inpval]));
    }
  };
  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3 " style={{ width: "100%" }}>
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

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicData">
                <Form.Control type="date" onChange={getdata} name="date" />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  onChange={getdata}
                  name="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Form.Group className="mb-3 " controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
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
                <NavLink to="/Login">SignIn</NavLink>
              </span>{" "}
            </p>
          </div>
          <Sing_img />
        </section>
      </div>
    </>
  );
};

export default Home;
