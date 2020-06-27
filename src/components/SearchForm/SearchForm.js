import React from 'react'

class SearchForm extends React.Component {
    render() {
        return (
            <form id="event-search-form">
                <input type="text" placeholder="Search" className="event-search-input" id="search-input" />
                <br />
                <div className="date-container">
                    <p>Starting Date:</p>
                    <div className="date-inner-container">
                        <div className="date-left">
                            <select name="month" id="month" className="event-select">
                                <option value="none" selected disabled>Choose Month</option>
                                <option value="youtube">YouTube</option>
                                <option value="facebook">Facebook</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="date-right">
                            <select name="day" id="day" className="event-select">
                                <option value="none" selected disabled>Choose Day</option>
                                <option value="youtube">YouTube</option>
                                <option value="facebook">Facebook</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                    <p>End Date:</p>
                    <div className="date-inner-container">
                        <div className="date-left">
                            <select name="month" id="month" className="event-select">
                                <option value="none" selected disabled>Choose Month</option>
                                <option value="youtube">YouTube</option>
                                <option value="facebook">Facebook</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="date-right">
                            <select name="day" id="day" className="event-select">
                                <option value="none" selected disabled>Choose Day</option>
                                <option value="youtube">YouTube</option>
                                <option value="facebook">Facebook</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                </div>
                <br />
                <label for="genre">Filter by genre:</label>
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
                <label for="platform">Filter by platform:</label>
                <select name="platform" id="platform" className="event-select">
                    <option value="none" selected>All Platforms</option>
                    <option value="twitch">Twitch</option>
                    <option value="youtube">YouTube</option>
                    <option value="facebook">Facebook</option>
                    <option value="other">Other</option>
                </select>
                <button type="submit" className="search-button">Submit</button>
            </form>
        )
    }
}

export default SearchForm