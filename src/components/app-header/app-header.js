import React from 'react';
import './app-header.scss';
import { Link } from 'react-router-dom';

const AppHeader = () => {
    return (
        <header className="header">
            <Link to ={'/'} className = "header__link">Home</Link>
            <Link to = "/caught" className = "header__link">Caught</Link>
        </header>
    )
};

export default AppHeader;