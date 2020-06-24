import React from 'react'

class AddEvent extends React.Component {
    render() {
        return (
            <div className="cover">
                <div className="add-cover-container">
                    <div className="form-box center">
                        <form className="main-form">
                            <a href="/home.html" className="cover-exit"></a>
                            <h1>Add Event</h1>
                            <fieldset name="login-info">
                                <div className="add-event-container">
                                    <div className="add-event-left">
                                        <h4>Event Title</h4>
                                        <input placeholder="" type="text" name="title" id="email" className="text-input center"
                                            required />
                                        <h4>Image URL</h4>
                                        <input type="text" name="image-url" id="image-url" placeholder=""
                                            className="text-input center" required />
                                        <h4>Stream URL</h4>
                                        <input type="text" name="stream-url" id="stream-url" placeholder=""
                                            className="text-input center" required />
                                    </div>
                                    <div className="add-event-right">
                                        <h5>Genre(s)</h5>
                                        <div className="genre-container center">
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
                                                <label className="genre">Other
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

                                                <label className="genre">Techno
                                                <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <br />
                                        <h5>Platform</h5>
                                        <select name="platform" id="platform" className="event-select center">
                                            <option value="twitch" selected>Twitch</option>
                                            <option value="youtube">YouTube</option>
                                            <option value="facebook">Facebook</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <h4>Event Info</h4>
                                <textarea className="add-event-info center">

                                </textarea>
                                <div className="date-container">
                                    <h4>Starting Date:</h4>
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
                                    <h4>End Date:</h4>
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

                            </fieldset>
                            <button type="submit">Add Event</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddEvent