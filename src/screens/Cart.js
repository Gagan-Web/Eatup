import React from "react";
import { useCart, useDispatch } from "../components/ContextReducers";
import trash from "../delete.png";

const Cart = () => {
  let data = useCart();
  let dispatch = useDispatch();

  if (data.length === 0) {
    return (
      <div className="text-center text-white mt-5">
        <h2 className="fs-3">Your Cart is Empty</h2>
        <p className="text-muted">Add some delicious food to your cart!</p>
      </div>
    );
  }

  const handleCheckout = async () => {
    try {
      let useremail = localStorage.getItem("useremail");
      if (!useremail) {
        alert("User email not found. Please log in again.");
        return;
      }

      const response = await fetch("http://localhost:5000/api/OrderData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          order_data: data,
          email: useremail,
          order_date: new Date().toDateString(),
        }),
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(`Failed to place order: ${error}`);
      }

      const responseData = await response.json();
      console.log("Order successful: ", responseData);

      // Clear cart if successful
      dispatch({ type: "DROP" });
      alert("Order placed successfully!");
    } catch (error) {
      console.error("Checkout Error: ", error);
      alert("Failed to place order. Please try again later.");
    }
  };

  let totalPrice = data.reduce((total, food) => total + food.price, 0);

  return (
    <div className="container mt-5 text-white">
      <div className="table-responsive">
        <table className="table table-dark table-hover text-center align-middle">
          <thead className="text-uppercase text-success">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Option</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>₹{food.price}/-</td>
                <td>
                  <button
                    className="btn p-0"
                    onClick={() => dispatch({ type: "REMOVE", index: index })}
                  >
                    <img
                      src={trash}
                      alt="delete"
                      style={{
                        width: "24px",
                        height: "24px",
                        cursor: "pointer",
                      }}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-between align-items-center mt-4">
        <h3 className="text-success">Total Price: ₹{totalPrice}/-</h3>
        <div>
          <button
            className="btn btn-outline-success btn-lg mx-2"
            onClick={handleCheckout}
          >
            Check Out
          </button>
          <button className="btn btn-outline-warning btn-lg">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
