import React from 'react';
import './loginStyle.css'
import whiteBackground  from '../../static/img/GATEWAY_DSP_white.svg'
import blackCircle from '../../static/img/circle_black.svg'
import smartMindBlack from '../../static/img/SMARTMIND_black.svg'

export const Login = () => {
  return (
    <div>
     <img className="title" src={ whiteBackground } alt = 'whiteBackground' /> <br/>
      <form action="">

        <input type="text" className="loginInput" id="email" name="email" placeholder="Email" /><br />
        <input type="password" className="loginInput" id="password" name="password" placeholder="Password" /><br />

        <i className="far fa-info-circle" style={{ color: 'white' }}></i>
        <span className="support" id="support">Support</span><br />
        <a href="loading.html">
          <button type="button" className="loginButton" id="loginButton">Sign In</button>
        </a>
      </form>
      <div className="Loader">
        <img src={blackCircle} className="circles" alt='blackBackground' />
      </div>
      <img className="company" src={smartMindBlack} alt='brandname' /><br />
    </div>
  );
}
