import React, { useEffect, useState } from 'react'
import Header from './Header'
import { useDispatch } from "react-redux";
import { cartActions } from "../store/Cart_slice";
import CartItems from './CartItems';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const FoodItem = () => {
  let navigate = useNavigate();
  function thankYou(){
    navigate('/thankyou')
  }
  let total = 0;
  const itemList = useSelector((state)=>state.cart.itemsList)
  itemList.forEach(item=>{
    total+=item.totalPrice
  })
  const cartItems= useSelector((state)=>state.cart.showCart)
  console.log(cartItems)
  const dispatch = useDispatch()
  
    const [data,setData]=useState([]);
    
    
   
   
    const getData=()=>{
        fetch('feeds.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson);
            setData(myJson)
          });
      }
      useEffect(()=>{
        getData()
      },[])
      const addToCart = (name,price,id)=>{
        console.log(name,price)
        dispatch(cartActions.addToCart({
          name,
          price,
          id
        }))
        
      }
  return (
    <>
    <Header/>
    <div className='row mt-5'>
        
        
    

    {
       data && data.length>0 && data?.map((item)=><div key={item.key} className="col md-4 pt-5 d-flex justify-content-around">
        <div  className="card" style={{width: "18rem"}}>
       <img  src={item.image} className="card-img-top item_img" alt="..."/>
       <div className="card-body">
         <h5 className="card-title">{item.name}</h5>
         <p className="card-text">{item.price}</p>
        
         <div className="row">
            
         <button onClick={()=>addToCart(item.name,item.price,item.key)}>Add to cart</button>
         </div>
         
       </div>
     </div>
     </div>)
     }
     {cartItems&&<CartItems/>}
     <div className="total-price">
          <h3>Total: ${total}</h3>
          <button onClick={thankYou} className="orderBtn">Place Order</button>
        </div>
      </div>
     
   
    </>
  )
}

export default FoodItem