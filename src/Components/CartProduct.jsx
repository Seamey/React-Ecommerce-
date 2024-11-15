import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";

const CartProduct = ({ product }) => {
  const { dispatch } = useContext(CartContext);

  const Increase = () => {
    dispatch({ type: "Increase", id: product.id });
  };

  const Decrease = () => {
    dispatch({ type: "Decrease", id: product.id });
  };

  return (
    <div className="flex items-center border p-4 mb-4 rounded shadow-md">
      <img
        src={product.image}
        alt={product.title}
        className="w-24 h-24 object-cover rounded mr-4"
      />
      <div className="flex-grow">
        <h4 className="text-xl font-semibold">{product.title}</h4>
        <h5 className="text-lg text-gray-700">${product.price}</h5>
        <div className="flex items-center mt-2">
          <button
            className="rounded-full bg-gray-300 text-black px-3 py-1"
            onClick={Decrease}
          >
            -
          </button>
          <span className="px-4">{product.quantity}</span>
          <button
            className="rounded-full bg-gray-300 text-black px-3 py-1"
            onClick={Increase}
          >
            +
          </button>
        </div>
        <button
          className="btn btn-sm btn-warning mt-2"
          onClick={() => dispatch({ type: "Remove", id: product.id })}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
