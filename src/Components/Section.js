import React from 'react'
import { useNavigate } from "react-router-dom";

const Section = () => {
  let navigate = useNavigate();
  function loginPage(){
    navigate('/login')
  }
  return (
    <div>
        <div className='head_sec'>
         <h1 className='sec_font'>Welcome to Food's</h1>
         <h1 className='sec_font'>Kitchen</h1>
         <button onClick={loginPage} className='login_btn'>Go to Menu</button>
     </div>
    </div>
  )
}

export default Section