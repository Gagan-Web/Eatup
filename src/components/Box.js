import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useCart } from "./ContextReducers";
const Box = (props) => {
  let dispatch = useDispatch();
  let data = useCart();
  let options = props.options;
  let priceOptions = Object.keys(options);
  const [qty, setqty] = useState(1);
  const [size, setsize] = useState("");
  const priceRef = useRef();
  const handleaddtocart = async () => {
    let food = [];
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;

        break;
      }
    }
    if (food !== []) {
      if (food.size === size) {
        await dispatch({
          type: "UPDATE",
          id: props.foodItem._id,
          price: finalPrice,
          qty: qty,
        });
        return;
      } else if (food.size !== size) {
        await dispatch({
          type: "ADD",
          id: props.foodItem._id,
          name: props.foodItem.name,
          price: finalPrice,
          qty: qty,
          size: size,
        });
        return;
      }
      return;
    }
    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: finalPrice,
      qty: qty,
      size: size,
    });
  };
  let finalPrice = qty * parseInt(options[size]);
  useEffect(() => {
    setsize(priceRef.current.value);
  }, []);

  return (
    <div>
      <div>
        <div
          className="card mt-3 bg-dark text-white border-white"
          style={{ width: "18rem", maxHeight: "500px" }}
        >
          <img
            src={props.foodItem.img}
            className="card-img-top"
            alt="..."
            style={{ height: "120px", objectFit: "fill" }}
          />
          <div className="card-body">
            <h5 className="card-title">{props.foodItem.name}</h5>
            <div className="container w-100">
              <select
                className="ms-auto m-2 h-100  bg-success rounded"
                onChange={(e) => setqty(e.target.value)}
              >
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select
                className="m-2 h-100 bg-success rounded ms-1"
                ref={priceRef}
                onChange={(e) => setsize(e.target.value)}
              >
                {priceOptions.map((data) => {
                  return (
                    <option key={data} value={data}>
                      {data}
                    </option>
                  );
                })}
              </select>
              <div className="d-inline fs-6"> ₹{finalPrice}/- </div>
            </div>
          </div>
          <hr className="m-0"></hr>
          <button
            className={"btn btn-success justify-center fs-5"}
            onClick={handleaddtocart}
          >
            AddToCart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Box;
