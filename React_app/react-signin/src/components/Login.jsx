import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Sing_img from "./Sing_img";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
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

    const getUserArry = localStorage.getItem("useryoutube");
    console.log(getUserArry);

    const { email, password } = inpval;
    if (email === "") {
      alert("Please enter your email");
    } else if (!email.includes("@")) {
      alert("Please enter your Correct email address");
    } else if (password === "") {
      alert("Please enter your password");
    } else if (password.length < 5) {
      alert("Password should be at least 5 characters");
    } else {
      if (getUserArry && getUserArry.length) {
        const userdata = JSON.parse(getUserArry);
        const userlogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password;
        });

        if (userlogin.length === 0) {
          alert("Invalid email or password");
        } else {
          alert("Login Successfull");
          console.log("Login Successfull");

          localStorage.setItem("user_login", JSON.stringify(userlogin));

          history("/details");
        }
      }
    }
  };
  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3 " style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign In</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  onChange={getdata}
                  name="email"
                  placeholder="Enter email"
                />
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
              Already Have an Account <span>SignIn</span>{" "}
            </p>
          </div>
          <Sing_img />
        </section>
      </div>
    </>
  );
};

export default Login;
