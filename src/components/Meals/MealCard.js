import { Fragment, useContext } from "react";
import classes from "./MealCard.module.css";
import ItemForm from "./ItemForm";
import CartContext from "../../store/Cart";
const MealCard = (props) => {
  const cartContext = useContext(CartContext);
  const addToCartHandler = (amount) => {
    // console.log("props:", props);
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      description: props.description,
    });
  };
  return (
    <Fragment>
      <div className="card mt-2">
        <h5 className="card-header">{props.name}</h5>
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div>
              <div className={classes.description}>{props.description}</div>{" "}
              <h5 className="mt-2">{`$${props.price.toFixed(2)}`}</h5>
            </div>
            <div>
              <ItemForm onAddToCart={addToCartHandler} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MealCard;
