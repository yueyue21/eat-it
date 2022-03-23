import { useContext, useState } from "react";
import Modal from "../Layout/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/Cart";
import Payment from "./Payment";

const Cart = (props) => {
  const [proceedToPay, setProceedToPay] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const cartContext = useContext(CartContext);

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasDelivery =
    cartContext.totalAmount > 0 && cartContext.totalAmount < 12;
  const GST = `$${(cartContext.totalAmount * 0.05).toFixed(2)}`;
  const finalAmount = `$${(
    cartContext.totalAmount +
    cartContext.totalAmount * 0.05 +
    (hasDelivery ? 12 : 0)
  ).toFixed(2)}`;

  //   const hasItems = cartContext.items.length > 0;
  const handleCheckout = () => {
    setProceedToPay(true);
  };
  const handlePaymentSuccess = () => {
    setPaymentSuccess(true);
  };

  const cartItems = (
    <ul className={classes.items}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          description={item.description}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {!paymentSuccess && (
        <div>
          {cartItems}
          <div className={classes.total}>
            <span>Subtotal</span>
            <span>{totalAmount}</span>
          </div>
          <div className={classes.total}>
            <span>GST</span>

            <span>{GST}</span>
          </div>
          <div className={classes.total}>
            <span>Delivery</span>
            <span>{hasDelivery ? `${12.99}` : "FREE"}</span>
          </div>
          <div className={classes.total}>
            <span>Total</span>

            <span>{finalAmount}</span>
          </div>
        </div>
      )}
      <div className={classes.actions}>
        {proceedToPay && (
          <Payment
            onClose={props.onClose}
            paymentSuccess={handlePaymentSuccess}
            finalAmount={finalAmount}
          />
        )}
        {!proceedToPay && (
          <button className="btn btn-outline-primary" onClick={props.onClose}>
            Close
          </button>
        )}
        {!proceedToPay && (
          <button className="btn btn-dark" onClick={handleCheckout}>
            Check out
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
