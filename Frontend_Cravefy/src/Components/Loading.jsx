import React from 'react';
import './Loading.css';

const Loading = () => (
    <div className="loading-container">
        <div className="loading-spinner"></div>
        <h2 className="loading-text">Loading...</h2>
        <p className="loading-subtext">Please wait while we prepare the service.</p>
    </div>
);

export default Loading;
