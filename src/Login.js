import React from 'react';
import './Login.css';
import logo from './images/logowhite.png';
import { loginUrl } from './spotify';

function Login() {
  return (
    <div className="login">
      <img src={logo} alt="Musicbay Logo"/>
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login