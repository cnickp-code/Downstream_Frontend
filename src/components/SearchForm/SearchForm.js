import React from 'react'

class SearchForm extends React.Component {
    render() {
        return (
            <form id="event-search-form">
                <input type="text" placeholder="Search" className="event-search-input" id="search-input" />
                <br />
                    <p>Time Frame:</p>
                    <div className="date-inner-container">
                        <select name="month" id="month" className="event-select">
                            <option value="none" selected disabled>Choose Time Frame</option>
                            <option value="youtube">Today</option>
                            <option value="facebook">Within One Week</option>
                            <option value="other">This Month</option>
                            <option value="other">This Year</option>
                            <option value="other">No Time Frame</option>
                        </select>
                    </div>

                <p className="margin-top">Show Past Events?</p>
                <select name="day" id="day" className="event-select">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <label htmlFor="genre" className="margin-top">Filter by genre:</label>
                <div className="genre-container">
                    <div className="genre-container-left">
                        <label className="genre">House
                                <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="genre">Dubstep
                                <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="genre">Trance
                                <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="genre">Techno
                                <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="genre">Jazz
                                <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="genre">Rap
                                <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="genre-container-right">
                        <label className="genre">Trap
                                <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="genre">DnB
                                <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="genre">Mixed
                                <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="genre">Other
                                <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="genre">All Genres
                                <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </div>
                <br />
                <label htmlFor="platform">Filter by platform:</label>
                <select name="platform" id="platform" className="event-select">
                    <option value="none" selected>All Platforms</option>
                    <option value="twitch">Twitch</option>
                    <option value="youtube">YouTube</option>
                    <option value="facebook">Facebook</option>
                    <option value="other">Other</option>
                </select>
                <button type="submit" className="search-button margin-top">Submit</button>
            </form>
        )
    }
}

export default SearchForm