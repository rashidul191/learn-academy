import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/home">Home</a>
                <a href="/jobs">Jobs</a>
                <a href="/all-courses">All Courses</a>
                <a href="/blog">Blog</a>
                <a href="/login">LOGIN</a>
                <a href="/sign-up">SIGN UP</a>
            </nav>
        </div>
    );
};

export default Header;