import React from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className="login-container">
            <Link to="/" className="home-link">
                Go to Homepage
            </Link>

            <form className="login-form">
                <h2 className="login-title">Login</h2>
                <input type="email" placeholder="Email" className="login-input" />
                <input type="password" placeholder="Password" className="login-input" />
                <button type="submit" className="login-button">
                    Login
                </button>
                <p className="login-register">
                    Don't have an account? <a href="/signup">Sign-Up</a>
                </p>
            </form>
            <footer className="footer">
                <p>Made by &copy;Srijan Gupta</p>
            </footer>
        </div>
    );
};

export default Login;
