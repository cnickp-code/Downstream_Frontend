import React from 'react'
import DatePicker from 'react-datepicker'

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: new Date(),
            endDate: new Date(),
        }
    }

    handleStartDateChange = (date) => {
        this.setState({
            startDate: date
        });
    }

    handleEndDateChange = (date) => {
        this.setState({
            endDate: date
        });
    }

    render() {
        return (
            <div className="sidebar">
                <h1 className="cover-event-title">Search Menu</h1>

                <form id="event-search-form">
                    <input type="text" placeholder="Search" className="event-search-input" id="search-input" />
                    <br />
                    <div className="date-container">
                        <p>Start Date:</p>
                        <DatePicker
                            selected={this.state.startDate}
                            showTimeInput
                            onChange={this.handleStartDateChange}
                        />

                        <p className="margin-top">End Date:</p>
                        <DatePicker
                            id="end-date-time"
                            name="endDateTime"
                            selected={this.state.endDate}
                            showTimeInput
                            onChange={this.handleEndDateChange}
                        />

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

            </div>
        )
    }
}

export default Sidebar