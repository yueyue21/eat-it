import React from "react";
// import foodImage from "../../assets/food.jpeg";
import classes from "./Header.module.css";
import HeaderCart from "./HeaderCart";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Eat it all</h1>
        <HeaderCart onClick={props.onShowModal} />
      </header>

      {/* <div>
        <img
          className={classes["main-image"]}
          src={foodImage}
          alt="table of food"
        />
      </div> */}
    </React.Fragment>
  );
};

export default Header;
