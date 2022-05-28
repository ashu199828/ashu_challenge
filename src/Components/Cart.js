import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/Cart_slice";
import "./Cart.css";
const Cart = () => {
  
  const quantity = useSelector((state)=>state.cart.totalQuantity)
  const dispatch= useDispatch()
  const showCart= ()=>{
    dispatch(cartActions.ShowCart())
  }
  return (
    <div >
      <div className="cartIcon">
    <span className="material-icons">
shopping_cart 
</span>
<h3 onClick={showCart}>{quantity}</h3>
</div>
    </div>
  );
};

export default Cart;
