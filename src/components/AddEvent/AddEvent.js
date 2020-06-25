import React from 'react'
import DSContext from '../../contexts/DSContext'

class AddEvent extends React.Component {
    static contextType = DSContext

    handleSubmitEvent(event, callback) {
        event.preventDefault();
    }

    render() {
        return (

            <div className="form-box center">
                <form className="main-form" onSubmit={event => this.handleSubmitEvent(event, this.context.addEvent)}>
                    <h1>Add Event</h1>
                    <fieldset name="login-info">
                        <div className="add-event-container">
                            <div className="add-event-left">
                                <h4>Event Title</h4>
                                <input placeholder="" type="text" name="title" id="email" className="text-input center"
                                    required />
                                <h4>Image URL</h4>
                                <input type="url" name="image-url" id="image-url" placeholder="https://"
                                    className="text-input center" required />
                                <h4>Stream URL</h4>
                                <input type="url" name="stream-url" id="stream-url" placeholder="https://"
                                    className="text-input center" required />
                            </div>
                            <div className="add-event-right">
                                <div className="genre-platform-container">
                                    <div className="add-genre-container">
                                        <h5>Genre</h5>
                                        <select name="platform" id="platform" className="event-select center">
                                            <option value="twitch" selected>Twitch</option>
                                            <option value="youtube">YouTube</option>
                                            <option value="facebook">Facebook</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="add-platform-container">
                                        <h5>Platform</h5>
                                        <select name="platform" id="platform" className="event-select center">
                                            <option value="twitch" selected>Twitch</option>
                                            <option value="youtube">YouTube</option>
                                            <option value="facebook">Facebook</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <br />
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
                            </div>
                        </div>
                        <h4>Event Info</h4>
                        <textarea className="add-event-info center">

                        </textarea>


                    </fieldset>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddEvent