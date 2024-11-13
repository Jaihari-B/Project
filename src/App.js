import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import Main from './Main';
import './Font.css';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <ThemeProvider>
      <Toaster position='top-center'/>
      <Router>
        <AppContainer />
      </Router>
    </ThemeProvider>
  );
};  

const AppContainer = () => {
  const { themeStyles, toggleTheme } = useTheme();

  return (
    <div className={`app-container ${themeStyles}`}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Main />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
};

export default App;
