import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEye, FaEyeSlash, FaArrowRight } from 'react-icons/fa';

import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const togglePasswordVisibility = (e) => {
    e.preventDefault(); // Prevent the default action to avoid losing focus
    setShowPassword(prevState => !prevState);
  };

  return (
    <div>
      <div className="text-center mb-4">
        {/* Logo Image */}
        <img 
          src="/assets/Logo.png" 
          alt="Logo" 
          className="mb-4" 
          style={{ maxWidth: '40px', height: 'auto' }} 
        />
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="login-box p-4 shadow bg-light rounded" style={{ maxWidth: '463px', width: '463px', height: '420px' }}>
          <h2 className="text-center">WELCOME BACK</h2>
          <p className="text-center">Log into your account</p>
          <form className='pdd'>
            <div className="form-group">
              <label htmlFor="email">Email or Username</label>
              <input 
                type="text" 
                className="form-control" 
                id="email" 
                placeholder="Enter your email or username" 
                style={{ 
                  backgroundColor: emailFocused ? 'white' : 'transparent',
                  color: emailFocused ? 'black' : '#7F8084'
                }}
                
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
              />
            </div>
            <div className="form-group">
              <div className="d-flex justify-content-between align-items-center">
                <label htmlFor="password">Password</label>
                <a href="#forgot-password" className="text-right">Forgot password?</a>
              </div>
              <div className="input-group mt-2" style={{ position: 'relative' }}>
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  className="form-control" 
                  id="password" 
                  placeholder="Enter your password" 
                  style={{ 
                    paddingRight: '3rem',
                    backgroundColor: passwordFocused ? 'white' : 'transparent',
                    color: passwordFocused ? 'black' : '#7F8084'
                  }}
                  
                  onFocus={() => setPasswordFocused(true)}
                
                />
                <span 
                  style={{
                    position: 'absolute',
                    right: '20px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    color: '#7F8084',
                    zIndex: 999,
                  }}
                  onMouseDown={togglePasswordVisibility} // Use onMouseDown to prevent losing focus
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
            <Link to="/home">  <button type="submit" className="btn btn-primary btn-block">Login Now</button></Link> 
            <div className="text-left mt-3">
              <p>Not registered yet? <a href="" className='regu'>Register <FaArrowRight /></a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
