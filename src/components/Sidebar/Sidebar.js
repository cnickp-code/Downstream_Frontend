import React from 'react'
import SearchForm from '../SearchForm/SearchForm'


class Sidebar extends React.Component {


    render() {
        return (
            <div className="sidebar">
                {/* <div className="sidebar-fab-container">
                    <div className="sidebar-fab">
                        <i className="fas fa-search"></i>
                    </div>
                    
                </div> */}
                <h1 className="cover-event-title">Search Menu</h1>

                <SearchForm />
            </div>
        )
    }
}

export default Sidebar