import classes from "./Payment.module.css";
import { useRef, useState } from "react";
import Confimation from "./Confirmation";
const Payment = (props) => {
  //   const nameRef = useRef();
  //   const cardNumRef = useRef();
  //   const expDateRef = useRef();
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentAttempted, setPaymentAttempted] = useState(false);
  const [errorMesg, setErrorMesg] = useState(false);
  const [name, setName] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [expDate, setExpDate] = useState("");

  const nameHandler = (event) => {
    setName(event.target.value);
    // console.log(event.target.value);
  };
  const cardNumHandler = (event) => {
    setCardNum(event.target.value);
    // console.log(event.target.value);
  };
  const expDateHandler = (event) => {
    setExpDate(event.target.value);
    // console.log(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    // setName(nameRef.current.value);
    // setCardNum(cardNumRef.current.value);
    // setExpDate(expDateRef.current.value);

    // if (name != "" && cardNum.length == 16 && expDate.length == 4) {
    // }
    setPaymentAttempted(true);
    if (name === "") {
      setErrorMesg(<div>{"Please provide a name"}</div>);
    } else if (cardNum.length !== 16) {
      setErrorMesg(<div>{"The card number should be 16 digits"}</div>);
    } else if (expDate.length !== 4) {
      setErrorMesg(<div>{"The expire date  should be 4 digits"}</div>);
    } else {
      setPaymentSuccess(true);
      props.paymentSuccess();
    }
  };

  return (
    <div>
      {!paymentSuccess && (
        <form onSubmit={submitHandler} className={classes.payment}>
          <div>
            <div className="d-flex justify-content-between p-3">
              <label className={classes["required-label"]}>
                Name on the card:
              </label>
              <input
                className={classes.name}
                required
                type="text"
                // ref={nameRef}
                onChange={nameHandler}
              />
            </div>
            <div className="d-flex justify-content-between p-3">
              <label className={classes["required-label"]}>
                Card Number:(16 digits)
              </label>
              <input
                className={classes.creditNumber}
                label="Card Number"
                required
                type="number"
                // ref={cardNumRef}
                onChange={cardNumHandler}
                maxLength="16"
              />
            </div>
            <div className="d-flex justify-content-between p-3">
              <label className={classes["required-label"]}>
                Expire Date:(4 digits)
              </label>
              <input
                className={classes.expDate}
                label="Exp date"
                required
                type="number"
                // ref={expDateRef}
                onChange={expDateHandler}
                maxLength="4"
              />
            </div>
          </div>
          {paymentAttempted && (
            <div className="text-danger px-3 ">{errorMesg}</div>
          )}
          <div className="p-3">
            <button className="btn btn-outline-primary" onClick={props.onClose}>
              Close
            </button>
            <button className="btn btn-dark" type="submit">
              Feed me
            </button>
          </div>
        </form>
      )}

      {paymentSuccess && (
        <Confimation cardNum={cardNum} finalAmount={props.finalAmount} />
      )}
    </div>
  );
};
export default Payment;
