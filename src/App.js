import './App.css';
import Header from './Components/Header';
import Login from './Components/Login';
import Section from './Components/Section';

import {
  BrowserRouter as Router,
  Routes,
Route,
  
} from "react-router-dom";
import FoodItems from './Components/FoodItem';
import Thankyou from './Components/Thankyou';






function App() {
  
  
  
  return (
    <div className="App">
      <Router>
      <Routes>
    <Route path='/' element={<div> <Header/><Section/></div>}/> 
    
    
    <Route exact path='/login' element={<div><Login/></div>}/> 
    <Route  path='/foodItems' element={<FoodItems/>}/>
    <Route  path='/thankyou' element={<Thankyou/>}/>
    
   
    </Routes>
    </Router>
    
     </div>
  ); 
}

export default App;
