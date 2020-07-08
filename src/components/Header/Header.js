import React from 'react';
import { NavLink } from 'react-router-dom';
import TokenService from '../../services/token-service';
import DSContext from '../../contexts/DSContext';

class Header extends React.Component {
    static contextType = DSContext;

    handleResetToDefault = () => {
        this.context.resetToDefault();
    }

    handleLogoutClick = () => {
        TokenService.clearAuthToken();
    }

    renderPublicNav() {
        return (
            <>
                <nav className="main-nav">
                    <ul className="nav-list">
                        <li><NavLink to='/news' className="nav-link">News</NavLink></li>
                        <li><NavLink to="/events" className="nav-link" onClick={this.handleResetToDefault}>Events</NavLink></li>
                        <li><NavLink to="/signup" className="nav-link" onClick={this.handleResetToDefault}>My Schedule</NavLink></li>
                    </ul>
                    <ul className="nav-list">
                        <li><NavLink to="/login" className="nav-link">Login</NavLink></li>
                        <li><NavLink to="/signup" className="nav-link">Sign Up</NavLink></li>
                    </ul>
                </nav>
                <nav className="mobile-nav" role="navigation">
                    <div id="menuToggle">

                        <input type="checkbox" />

                        <span></span>
                        <span></span>
                        <span></span>

                        <ul id="menu">
                            <NavLink to="/news"><li>News</li></NavLink>
                            <NavLink to="/events" onClick={this.handleResetToDefault}><li>Events</li></NavLink>
                            <NavLink to="/signup" onClick={this.handleResetToDefault}><li>My Schedule</li></NavLink>
                            <NavLink to="/login"><li>Login</li></NavLink>
                            <NavLink to="/signup"><li>Sign Up</li></NavLink>
                        </ul>
                    </div>
                    <div className="mobile-logo" >

                        <NavLink to="/home" className="nav-header-text"><i className="fas fa-headphones margin-right"></i>DownStream</NavLink>
                    </div>
                </nav>

            </>
        )

    }

    renderPrivateNav() {
        return (
            <>
                <nav className="main-nav">
                    <ul className="nav-list">
                        <li><NavLink to='/news' className="nav-link">News</NavLink></li>
                        <li><NavLink to="/events" className="nav-link">Events</NavLink></li>
                        <li><NavLink to="/schedule" className="nav-link">My Schedule</NavLink></li>
                    </ul>
                    <ul className="nav-list">
                        <li><NavLink to="/add_event" className="nav-link">Add Event</NavLink></li>
                        <li><NavLink to="/home" className="nav-link" onClick={this.handleLogoutClick}>Log Out</NavLink></li>
                    </ul>
                </nav>
                <nav className="mobile-nav" role="navigation">
                    <div id="menuToggle">

                        <input type="checkbox" />

                        <span></span>
                        <span></span>
                        <span></span>

                        <ul id="menu">
                            <NavLink to="/news"><li>News</li></NavLink>
                            <NavLink to="/events"><li>Events</li></NavLink>
                            <NavLink to="/schedule"><li>My Schedule</li></NavLink>
                            <NavLink to="/add_event"><li>Add Event</li></NavLink>
                            <NavLink to="/home" onClick={this.handleLogoutClick}><li>Log Out</li></NavLink>
                        </ul>
                    </div>
                    <div className="mobile-logo" >

                        <NavLink to="/home" className="nav-header-text"><i className="fas fa-headphones margin-right"></i>DownStream</NavLink>
                    </div>
                </nav>

            </>
        )
    }

    render() {
        return (
            <>
                <div className="header-link">
                    <NavLink to="/home" className="header-text"><i className="fas fa-headphones margin-right"></i>DownStream</NavLink>
                </div>
                {TokenService.hasAuthToken()
                    ? this.renderPrivateNav()
                    : this.renderPublicNav()}
            </>
        )
    }
}

export default Header