import { Fragment } from "react";
import Meals from "../Meals/Meals";
import classes from "./Body.module.css";
const Body = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <Meals />
      </div>
    </Fragment>
  );
};
export default Body;
