import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <Link to="/" className="nav-item">
                <i class="fas fa-home"></i>
                <span>Home</span>
            </Link>
            <Link to="/trending" className="nav-item">
                <i class="fas fa-fire"></i>
                <span>Trending</span>
            </Link>
            <Link to="/subsriptions" className="nav-item">
                <i class="fas fa-photo-video"></i>
                <span>Subscriptions</span>
            </Link>
            <Link to="library" className="nav-item">
                <i class="fas fa-photo-video"></i>
                <span>Library</span>
            </Link>
        </nav>
    )
}

export default Nav
