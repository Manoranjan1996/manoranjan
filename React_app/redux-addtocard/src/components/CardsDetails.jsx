import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DLT, ADD, REMOVE } from "../redux/actions/Action";
import "./CardsDetails.css";

const CardsDetails = () => {
  const [data, setData] = useState([]);

  const { id } = useParams(); // id from URL params
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartData = useSelector((state) => state.cartreducer.carts);

  const compare = () => {
    const selectedData = cartData.filter((item) => item.id === Number(id)); // Fix: Convert id to number
    setData(selectedData);
  };

  const handleAdd = (item) => {
    dispatch(ADD(item)); // Dispatches ADD_CART action with the item object
  };

  const handleRemove = (item) => {
    dispatch(REMOVE(item)); // Dispatches RMV_ONE action with the item object
  };

  const handleDelete = (id) => {
    dispatch(DLT(id)); // Dispatches RMV_CART action with the item ID
    navigate("/"); // Navigate back to the home page
  };

  useEffect(() => {
    compare();
    return () => {
      setData([]); // Clear data on unmount
    };
  }, [id]); // Re-run compare whenever id changes

  return (
    <div className="container mt-2">
      <h2 className="text-center">Item Details Page</h2>
      <section className="container mt-3">
        <div className="items-details">
          {data.length > 0 ? (
            data.map((item) => (
              <div key={item.id} className="item-card">
                <div className="item-image">
                  <img
                    src={item.imgdata}
                    alt={`${item.rname} preview`}
                    className="img-fluid"
                  />
                </div>
                <div className="details">
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                          <p>
                            <strong>Restaurant:</strong> {item.rname}
                          </p>
                          <p>
                            <strong>Price:</strong> ₹{item.price}
                          </p>
                          <p>
                            <strong>Dishes:</strong> {item.address}
                          </p>
                          <p>
                            <strong>Total:</strong> ₹{item.price * item.qnty}
                          </p>
                          <div
                            className="quantity-controls mt-5"
                            title="Adjust quantity"
                          >
                            <span
                              className="control"
                              onClick={
                                item.qnty <= 1
                                  ? () => handleDelete(item.id)
                                  : () => handleRemove(item)
                              }
                            >
                              -
                            </span>
                            <span className="quantity">{item.qnty}</span>
                            <span
                              className="control"
                              onClick={() => handleAdd(item)}
                            >
                              +
                            </span>
                          </div>
                        </td>
                        <td>
                          <p>
                            <strong>Rating:</strong>{" "}
                            <span className="rating">{item.rating} ★</span>
                          </p>
                          <p>
                            <strong>Order Review:</strong> {item.somedata}
                          </p>
                          <p>
                            <strong>Remove:</strong>{" "}
                            <span
                              className="delete-icon"
                              onClick={() => handleDelete(item.id)}
                              title="Delete item"
                            >
                              <i className="fas fa-trash"></i>
                            </span>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No item details found.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default CardsDetails;
