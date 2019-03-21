import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
//higher order component[withRouter] they rap other component and give them extra powers or 
//extra features

const Navbar = (props) => {   
    // setTimeout(() =>{
    //     props.history.push('/About')
    // }, 2000);
    return (
        <nav className="nav-wrapper red darken-3">
        <div className="container">
        <a className="brand-logo">poke'Times</a>
        <ul className="right">
           <li><Link to='/'>Home</Link></li>
           <li><NavLink to="/About">About</NavLink></li>
           <li><NavLink to="/Contact">Contact</NavLink></li>
           <li><NavLink to="/Login">Login</NavLink></li>
           
        </ul>




        </div>
         
        </nav>
    )
}

export default withRouter(Navbar)//higher other component