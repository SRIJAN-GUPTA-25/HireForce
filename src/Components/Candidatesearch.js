import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './CandidateSearch.module.css';

const CandidateSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [location, setLocation] = useState('');
    const [jobRole, setJobRole] = useState('');
    const [candidates, setCandidates] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault();
        // Search logic and fetching candidates...
    };

    const fetchCandidates = (location, jobRole) => {
        // Fetch logic...
    };

    return (
        <div className={styles['candidate-search-container']}>
            <Link to="/" className={styles['home-link']}>
                Go to Homepage
            </Link>

            <form onSubmit={handleSearch} className={styles['form']}>
                <input
                    type="text"
                    placeholder="Search candidates..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={styles['input-text']}
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className={styles['input-text']}
                />
                <input
                    type="text"
                    placeholder="Job Role"
                    value={jobRole}
                    onChange={(e) => setJobRole(e.target.value)}
                    className={styles['input-text']}
                />
                <button type="submit" className={styles['button']}>
                    Search
                </button>
            </form>

            <div className={styles['candidate-list']}>
                {candidates.map((candidate, index) => (
                    <div className={styles['candidate-card']} key={index}>
                        <h3>{candidate.name}</h3>
                        <p>Location: {candidate.location}</p>
                        <p>Job Role: {candidate.jobRole}</p>
                    </div>
                ))}
            </div>
            <footer className="footer">
                <p>Made by &copy;Srijan Gupta</p>
            </footer>
        </div>
    );
};

export default CandidateSearch;
