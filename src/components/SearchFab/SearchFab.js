import React from 'react'
import { NavLink } from 'react-router-dom'
import DSContext from '../../contexts/DSContext'
// import { CSSTransitionGroup } from 'react-transition-group'

class SearchFab extends React.Component {
    static contextType = DSContext

    constructor(props) {
        super(props)
        this.state = {
            showSearchInput: false
        }

        this.searchTerm = React.createRef();
    }

    handleShowMobileSearch = () => {
        // this.context.setShowMobileSearch();
        

        const newShowInput = !this.state.showSearchInput

        this.setState({
            showSearchInput: newShowInput
        })


    }

    handleMobileSearch = () => {
        const searchTerm = this.searchTerm.current.value;

        console.log(searchTerm)

        this.context.setSearchTerm(searchTerm)
        this.context.setSearchEvents();
    }

    render() {

        let searchInput 

        if(this.state.showSearchInput) {
            searchInput = <input type="text" placeholder="Search name, genre, artist, or description" className="mobile-search-input fade-in" ref={this.searchTerm} onChange={this.handleMobileSearch}/>
        } else {
            searchInput = <input type="text" placeholder="Search name, genre, artist, or description" className="mobile-search-input fade-out click-through" ref={this.searchTerm} onChange={this.handleMobileSearch}/>
        }


        return (
        <>
            {searchInput}
            <div className="fab-container" onClick={this.handleShowMobileSearch}>
                <div className="fab-search">
                    <i className="fas fa-search"></i>
                </div>
            </div>
        </>
        )
    }
}

export default SearchFab