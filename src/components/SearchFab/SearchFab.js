import React from 'react'
import { NavLink } from 'react-router-dom'
import DSContext from '../../contexts/DSContext'

class SearchFab extends React.Component {
    static contextType = DSContext

    handleShowMobileSearch = () => {
        this.context.setShowMobileSearch();
    }

    render() {
        return (
            <div className="fab-container" onClick={this.handleShowMobileSearch}>
                <div className="fab-search">
                    <i className="fas fa-search"></i>
                </div>
            </div>
        )
    }
}

export default SearchFab