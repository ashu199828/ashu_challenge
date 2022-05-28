
import Header from './Header'
import { useNavigate } from "react-router-dom";

const Login = () => {
  
  let navigate = useNavigate();
  function foodItems(){
    
    navigate('/foodItems')
   

  }
   
  
  return (
    <>
        <Header/>
        <form action="" method="post"/>
  

  <div className="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>

    <button onClick={foodItems} type="submit">Login</button>
   
  </div>

  
<form/>
       
      
        </>
  )
}

export default Login