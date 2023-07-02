import React from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';
const Signup = () => {
    return (
        <div className="signup-container">
            <Link to="/" className="home-link">
                Go to Homepage
            </Link>

            <form className="signup-form">
                <h2 className="signup-title">Sign Up</h2>
                <input type="text" placeholder="Name" className="signup-input" />
                <input type="email" placeholder="Email" className="signup-input" />
                <input type="password" placeholder="Password" className="signup-input" />
                <button type="submit" className="signup-button">
                    Sign Up
                </button>
                <p className="signup-login">
                    Already have an account? <a href="/login">Login</a>
                </p>
            </form>
            <footer className="footer">
                <p>Made by &copy;Srijan Gupta</p>
            </footer>
        </div>
    );
};

export default Signup;
