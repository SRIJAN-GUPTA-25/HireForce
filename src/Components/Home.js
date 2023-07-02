import React from 'react';
// import { useNavigate } from "react-router-dom";

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import Homepage from './Homepage';
// import Login from './Login';
// import Signup from './Signup';
import './Home.css';
// import CandidateSearch from './Candidatesearch';
const Homepage = () => {

    // const Navigate = useNavigate();
    return (
        <div className="homepage">
            <nav className="navbar">
                {/* <Router>
                    <Routes>

                        <Route exact path="/" component={Homepage} />
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={Signup} />
                    </Routes>
                </Router> */}
                <div className="logo">HireForce</div>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/signup">Sign-Up</a></li>
                    <li><a href="/candidate">Candidate-Search</a></li>
                    <li><a href="/about">About Us</a></li>
                </ul>
                <div className="search-bar">
                    <input type="text" placeholder="Search" />
                    <button type="submit">Search</button>
                </div>
            </nav>
            <div className="hero">
                <h1 className="hero-title">Seamless Hiring Experience</h1>
                <p className="hero-description">
                    Welcome to our digital recruitment solution app, designed to provide a seamless hiring experience for multiple MNCs.
                </p>
                <a href="#features" className="hero-button">Learn More</a>
            </div>
            <section id="features" className="features">
                <div className="feature">
                    <h2 className="feature-title">Efficient Hiring Process</h2>
                    <p className="feature-description">
                        Our online recruitment solution streamlines the hiring process, saving time and effort for hiring managers and HR professionals.
                    </p>
                </div>
                <div className="feature">
                    <h2 className="feature-title">Advanced Candidate Search</h2>
                    <p className="feature-description">
                        Easily search and find candidates based on location and job roles. Evaluate and rank candidates with our intuitive evaluation section.
                    </p>
                </div>
                <div className="feature">
                    <h2 className="feature-title">Enhanced Collaboration</h2>
                    <p className="feature-description">
                        Collaborate seamlessly with your team members throughout the hiring process, ensuring efficient communication and decision-making.
                    </p>
                </div>
            </section>
            <footer className="footer">
                <p>Made by &copy;Srijan Gupta</p>
            </footer>
        </div>
    );
};

export default Homepage;
