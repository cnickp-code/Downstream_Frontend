import React from 'react';
import DSContext from '../../contexts/DSContext';

class SearchForm extends React.Component {
    static contextType = DSContext;

    constructor(props) {
        super(props)
        this.searchTerm = React.createRef();
        this.timeFrame = React.createRef();
        this.pastEvents = React.createRef();
        this.platform = React.createRef();

        this.genreHouse = React.createRef();
        this.genreDubstep = React.createRef();
        this.genreTrance = React.createRef();
        this.genreTechno = React.createRef();
        this.genreJazz = React.createRef();
        this.genreRap = React.createRef();
        this.genreTrap = React.createRef();
        this.genreOther = React.createRef();
        this.genreMixed = React.createRef();
    }

    handleSearch(event) {
        const searchTerm = this.searchTerm.current.value;
        // const timeFrame = this.timeFrame.current.value;
        // const pastBool = this.pastEvents.current.value;
        // const platform = this.platform.current.value;
        // let events = this.context.events;

        // let currentDate = new Date();

        this.context.setSearchTerm(searchTerm);
        this.context.setSearchEvents();
    }

    handlePastEvents = () => {
        const pastBool = this.pastEvents.current.value;

        this.context.toggleShowPastEvents(pastBool);
    }

    componentDidMount() {
        this.context.setSearchEvents();
    }

    render() {
        
        return (
            <form id="event-search-form">
                <input type="text" placeholder="Search name, genre, artist, or description" className="event-search-input" id="search-input" onChange={event => this.handleSearch(event)} ref={this.searchTerm}/>

                {/* <label htmlFor="past" className="margin-top">Show Past Events?</label>
                <select name="past" id="past" defaultValue="true" className="event-select" onChange={this.handlePastEvents} ref={this.pastEvents}>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select> */}
                
                {/* <br />
                    <p>Time Frame:</p>
                    <div className="date-inner-container">
                        <select name="timeframe" id="timeframe" className="event-select" onChange={event => this.handleSearch(event)} ref={this.timeFrame}>
                            <option value="none" selected disabled>Choose Time Frame</option>
                            <option value="today">Less than 24 hrs away</option>
                            <option value="week">Less than 1 week away</option>
                            <option value="month">Less than 1 month away</option>
                            <option value="year">This Year</option>
                            <option value="none">No Time Frame</option>
                        </select>
                    </div>


                <label htmlFor="genre" className="margin-top">Filter by genre:</label>
                <div className="genre-container">
                    <div className="genre-container-left">
                        <label className="genre">House
                                <input 
                                type="checkbox" 
                                value="house" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="genre">Dubstep
                        <input 
                                type="checkbox"
                                value="dubstep" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="genre">Trance
                        <input 
                                type="checkbox"
                                value="trance" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="genre">Techno
                        <input 
                                type="checkbox"
                                value="techno" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="genre">Jazz
                        <input 
                                type="checkbox"
                                value="jazz" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="genre">Rap
                        <input 
                                type="checkbox"
                                value="rap" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="genre-container-right">
                        <label className="genre">Trap
                        <input 
                                type="checkbox"
                                value="trap" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="genre">DnB
                        <input 
                                type="checkbox"
                                value="dnb" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="genre">Mixed
                        <input 
                                type="checkbox"
                                value="mixed" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="genre">Other
                        <input 
                                type="checkbox"
                                value="other" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </div>
                <br />
                <label htmlFor="platform">Filter by platform:</label>
                <select name="platform" id="platform" className="event-select" onChange={event => this.handleSearch(event)} ref={this.platform}>
                    <option value="none" selected>All Platforms</option>
                    <option value="twitch">Twitch</option>
                    <option value="youtube">YouTube</option>
                    <option value="facebook">Facebook</option>
                    <option value="other">Other</option>
                </select>
                <button type="submit" className="search-button margin-top">Submit</button> */}
            </form>

        )
    }
}

export default SearchForm