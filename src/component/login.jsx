import React, { Component } from 'react';
// import './login.css';


class Login extends Component {

    render() { 
        return ( 
            <div className='container'> 
            <div className='center' id="main-container">
            <h1  className="login">log in</h1>
            <input type="text" id="username" placeholder="input user name" />
            <input type="password" id="password" placeholder="input your password" />
            <button id="submit-btn" type="submit">Login</button>
            <p className="para">you dont have an account?...sign up here</p>
            </div>
            </div>
         );
    }
}
 
export default Login;








