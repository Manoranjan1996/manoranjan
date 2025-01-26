import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const [logindata, setLogindata] = useState([]);
  const history = useNavigate();
  const [show, setShow] = useState(false);

  const todayDate = new Date().toISOString().slice(0, 10);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Birthday = () => {
    const getuser = localStorage.getItem("user_login");

    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);
      setLogindata(user);
    }
  };

  const userlogout = () => {
    localStorage.removeItem("user_login");
    history("/");
  };

  useEffect(() => {
    Birthday();
  }, []);

  useEffect(() => {
    // Check for birthday after logindata is set
    if (logindata.length > 0 && logindata[0].date === todayDate) {
      const timer = setTimeout(() => {
        console.log("ok");
        handleShow();
      }, 2000);
      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [logindata, todayDate]); // Dependency array includes logindata

  return (
    <>
      {logindata.length === 0 ? (
        "error"
      ) : (
        <>
          <h1>Details Page</h1>
          <h1>{logindata[0].name}</h1>
          <Button onClick={userlogout}>LogOut</Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{logindata[0].name} 😄</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Wish you many many happy returns of the day! 🍰
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </>
  );
};

export default Details;
