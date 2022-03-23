const Confimation = (props) => {
  return (
    <div>
      <div className="text-center">
        <h5 className="text-success py-3">You payment is proceed!</h5>
        <p>
          {" "}
          Total amount of <span className="text-info">
            {props.finalAmount}
          </span>{" "}
          to card{" "}
          {props.cardNum.toString().slice("", 4) +
            "********" +
            props.cardNum.toString().slice(-4)}
        </p>
      </div>
    </div>
  );
};
export default Confimation;
