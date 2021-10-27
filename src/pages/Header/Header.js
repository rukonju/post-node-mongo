import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <Link to='/home'>Home</Link>
            <Link to='/posts'>Posts</Link>
            <Link to='/post/add'>Add post</Link>
        </div>
    );
};

export default Header;