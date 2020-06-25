import React from 'react'
import { NavLink } from 'react-router-dom'

class SearchFab extends React.Component {
    render() {
        return (
            <div className="fab-container">
                <NavLink to="/events" className="fab-search">
                    <i className="fas fa-search"></i>
                </NavLink>
            </div>
        )
    }
}

export default SearchFab