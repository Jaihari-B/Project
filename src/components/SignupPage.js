import React, { useState } from 'react';
import { signup } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import './SignupPage.css';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { themeStyles } = useTheme();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup({ email, password });
      navigate('/');
    } catch (error) {
      alert('Signup failed. Please try again.');
    }
  };
  const login = () => {
    navigate('/');
  }
  return (
    <form className={`signup-container ${themeStyles}`} onSubmit={handleSignup}>
      <h2>Signup</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Signup</button>
      <button type="submit" onClick={login}>Already an user ? Login</button>
    </form>
  );
};

export default SignupPage;
