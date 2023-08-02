import React from 'react';
import {Link} from 'react-router-dom';
import logo1 from '../images/dotory.png'
import logo2 from '../images/daramji.jpeg';
import './header.css';

function Header() {
  
  return (
    <div className="App">
      <div className="main-title" ><Link to="/"><img className="logo" src={logo1} alt = "dotory logo"/>DoTory<img className="logo" src={logo2} alt = "dotory logo"/></Link></div>
      <div>
         
      </div>
      
      <nav>
        <ul className="nav-container">
        
          <li className = "nav-item"><Link to="/todolist">ToDoList</Link></li>
          <li className = "nav-item"><Link to="/diary">Diary</Link></li>
          <li className = "nav-item"><Link to="/new-pocket">Pocket</Link></li>        
  
        </ul>
      </nav>

    </div>
  );
}

export default Header;