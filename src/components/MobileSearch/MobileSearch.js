import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import DSContext from '../../contexts/DSContext';

class MobileSearch extends React.Component {
    static contextType = DSContext;

    handleHideSearch = () => {
        this.context.hideMobileSearch();
    }

    render() {
        return (
            <div className="cover">
                <div className="cover-container">
                    <div className="cover-exit" onClick={this.handleHideSearch}>
                        <i class="far fa-times-circle"></i>
                    </div>
                    <h1 className="cover-event-title">Search Menu</h1>

                    <SearchForm />
                </div>
            </div>
        )
    }
}

export default MobileSearch