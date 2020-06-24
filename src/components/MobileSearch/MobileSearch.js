import React from 'react'

class MobileSearch extends React.Component {
    render() {
        return(
            <div className="cover">
            <div className="cover-container">
            <button className="cover-exit"></button>
                <h1 className="cover-event-title">Search Menu</h1>
                <div className="calendar">
                    <div className="calendar-text">CALENDAR</div>
                </div>

                <form id="event-search-form">
                    <label for="search-input" className="event-input-label">Search Events:</label>
                    <input type="text" placeholder="Search" className="event-search-input" id="search-input" />
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
            </div>
        </div>
        )
    }
}

export default MobileSearch