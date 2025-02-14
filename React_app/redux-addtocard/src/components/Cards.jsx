import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardsData from "./CardsData";
import "./style.css";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/Action";

const Cards = () => {
  const [data, setData] = useState(CardsData);
  const dispatch = useDispatch();

  const send = (item) => {
    dispatch(ADD(item)); // Dispatch the ADD_CART action
  };

  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to Cart Projects</h2>
      {data.length > 0 ? (
        <div className="row d-flex justify-content-center align-items-center">
          {data.map((element) => (
            <Card
              key={element.id} // Use the item's ID as a unique key
              style={{ width: "22rem", border: "none" }}
              className="mx-2 mt-4 card_style"
            >
              <Card.Img
                variant="top"
                src={element.imgdata}
                style={{ height: "16rem" }}
                className="mt-3"
              />
              <Card.Body>
                <Card.Title>{element.rname}</Card.Title>
                <Card.Text>Price: ₹{element.price}</Card.Text>
                <div className="button_div d-flex justify-content-center">
                  <Button
                    variant="primary"
                    onClick={() => send(element)}
                    className="col-lg-12"
                  >
                    Add to Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-center">No items available to display.</p>
      )}
    </div>
  );
};

export default Cards;
