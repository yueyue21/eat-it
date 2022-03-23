import React, { useState } from "react";
import Body from "./components/Layout/Body";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [modalIsShow, setModalIsShow] = useState(false);

  const showModal = () => {
    setModalIsShow(true);
  };
  const hideModal = () => {
    setModalIsShow(false);
  };
  return (
    <CartProvider>
      {modalIsShow && <Cart onClose={hideModal} />}
      <Header onShowModal={showModal} />
      <Body />
    </CartProvider>
  );
}

export default App;
