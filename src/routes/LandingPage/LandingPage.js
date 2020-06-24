import React from 'react';
import { NavLink } from 'react-router-dom'
import './LandingPage.css'

class LandingPage extends React.Component {
    render() {
        return (
            <div className="splash-image">
                <div className="splash-middle-container">
                    <i className="fas fa-headphones headphones"></i>
                    <i className="fas fa-tint drop1"></i>
                    <i className="fas fa-tint drop2"></i>
                    <i className="fas fa-tint drop3"></i>
                    <i className="fas fa-tint drop4"></i>
                    <h1 className="splash-text">Welcome to DownStream</h1>
                    <NavLink to="/home" className="splash-enter-button">
                        Enter
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default LandingPage