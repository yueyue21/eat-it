import { useRef, useState } from "react";
const ItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    let enteredAmount = amountInputRef.current.value;
    if (enteredAmount.trim().length === 0 || enteredAmount < 1) {
      setAmountIsValid(false);
      return;
    }
    enteredAmount = parseInt(enteredAmount);
    // console.log(props);
    props.onAddToCart(enteredAmount);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="text-nowrap">
        <label>Quantity: </label>
        <input
          ref={amountInputRef}
          id="quantity"
          type="number"
          min={0}
          defaultValue={1}
        />
      </div>
      <button type="submit" className="btn btn-primary mt-2 ml-auto">
        Add to cart
      </button>
      <div>
        {!amountIsValid && (
          <div className="text-danger">
            Please enter a valid positive number
          </div>
        )}
      </div>
    </form>
  );
};

export default ItemForm;
