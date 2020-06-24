import React from 'react';
import { NavLink } from 'react-router-dom'

class LandingPage extends React.Component {
    render() {
        return (
            <div className="splash-image">
                <div className="splash-middle-container">
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