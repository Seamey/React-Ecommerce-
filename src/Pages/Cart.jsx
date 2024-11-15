import React, { useContext } from 'react';
import { CartContext } from '../Features/ContextProvider';
import CartProduct from '../Components/CartProduct';
import { totalItem, totalPrice } from '../Features/CartReducer';

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="container mt-32">
      <div className="row">
        {/* Display cart items if there are any */}
        {cart.length > 0 ? (
          cart.map((product) => (
            <CartProduct key={product.id} product={product} />
          ))
        ) : (
          <div className="col-12 text-center mt-4">
            <h3>Your cart is empty</h3>
          </div>
        )}

        {/* Show totals and checkout button */}
        <div className="col-12 col-md-4 mt-4">
          <div className="bg-secondary p-4 text-white rounded">
            <h5>Total Items: {totalItem(cart)}</h5>
            <h5>Total Price: ${totalPrice(cart).toFixed(2)}</h5>
            <button className="btn btn-warning mt-2" disabled={cart.length === 0}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
