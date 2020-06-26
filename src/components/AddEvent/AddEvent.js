import React from 'react'
import DSContext from '../../contexts/DSContext'
import DownstreamApiService from '../../services/downstream-api-service'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

class AddEvent extends React.Component {
    static contextType = DSContext

    constructor(props) {
        super(props)
        this.name = React.createRef();
        this.imageUrl = React.createRef();
        this.streamUrl = React.createRef();
        this.eventPageUrl = React.createRef();
        this.genre = React.createRef();
        this.platform = React.createRef();
        this.startMonth = React.createRef();
        this.startDay = React.createRef();
        this.endMonth = React.createRef();
        this.endDay = React.createRef();
        this.description = React.createRef();
        this.state = {
            startDate: new Date(),
            endDate: new Date(),

            error: null
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

    handleSubmitEvent(event, callback) {
        event.preventDefault();
        const eventName = this.name.current.value;
        const eventImageUrl = this.imageUrl.current.value;
        const eventStreamUrl = this.streamUrl.current.value;
        const eventPageUrl = this.eventPageUrl.current.value;
        const eventGenre = this.genre.current.value;
        const eventPlatform = this.platform.current.value;
        const eventDescription = this.description.current.value;
        const eventStartDate = this.state.startDate;
        const eventEndDate = this.state.endDate;

        if(eventStartDate > eventEndDate) {
            this.setState({
                error: "Start date/time must be before end date/time."
            })
        }
        else if (eventGenre === "") {
            this.setState({
                error: "Please choose a genre."
            })
        } else if (eventPlatform === "") {
            this.setState({
                error: "Please choose a primary platform."
            })
        } else {
            const newEvent = {
                name: eventName,
                image_url: eventImageUrl,
                stream_url: eventStreamUrl,
                info_url: eventPageUrl,
                genre: eventGenre,
                platform: eventPlatform,
                start_date: eventStartDate.toLocaleDateString(),
                end_date: eventEndDate.toLocaleDateString(),
                description: eventDescription
            }
    
            console.log(newEvent)
            DownstreamApiService.postEvent(newEvent)
                .then(res => {
                    this.context.addEvent(res)
                    this.props.history.push('/home')
                })
                .catch(this.context.setError)
        }




    }

    render() {

        // Add conditional rendering of date select menus and genres

        return (

            <div className="form-box center">
                <form className="main-form" onSubmit={event => this.handleSubmitEvent(event, this.context.addEvent)}>
                    <h1>Add Event</h1>
                    <fieldset name="login-info">
                        <div className="add-event-container">
                            <div className="add-event-left">
                                <h4>Event Title</h4>
                                <input placeholder="" type="text" name="title" id="event-title" className="text-input center" ref={this.name}
                                    required />
                                <h4>Image URL</h4>
                                <input type="url" name="image-url" id="image-url" placeholder="https://"
                                    className="text-input center" ref={this.imageUrl} required />
                                <h4>Event Page URL</h4>
                                <input type="url" name="event-page-url" id="event-page-url" placeholder="https://"
                                    className="text-input center" ref={this.eventPageUrl} required />
                                <h4>Stream URL</h4>
                                <input type="url" name="stream-url" id="stream-url" placeholder="https://"
                                    className="text-input center" ref={this.streamUrl} required />
                            </div>
                            <div className="add-event-right">
                                <div className="genre-platform-container">
                                    <div className="add-genre-container">
                                        <h5>Genre</h5>
                                        <select name="platform" id="platform" className="event-select center" defaultValue="" ref={this.genre}>
                                            <option value="" disabled>Choose a genre</option>
                                            <option value="house">House</option>
                                            <option value="dubstep">Dubstep</option>
                                            <option value="techno">Techno</option>
                                            <option value="trance">Trance</option>
                                            <option value="trap">Trap</option>
                                            <option value="dnb">DnB</option>
                                            <option value="rap">Rap</option>
                                            <option value="mixed">Mixed</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="add-platform-container">
                                        <h5>Platform</h5>
                                        <select name="platform" id="platform" className="event-select center" defaultValue="" ref={this.platform}>
                                            <option value="" disabled>Choose a platform</option>
                                            <option value="twitch" >Twitch</option>
                                            <option value="youtube">YouTube</option>
                                            <option value="facebook">Facebook</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <br />
                                <div className="date-container">
                                    <h4>Start Date:</h4>
                                    <DatePicker
                                        selected={this.state.startDate}
                                        showTimeInput
                                        onChange={this.handleStartDateChange}
                                    />

                                    <h4 className="margin-top">End Date:</h4>
                                    <DatePicker
                                        id="end-date-time"
                                        name="endDateTime"
                                        selected={this.state.endDate}
                                        showTimeInput
                                        onChange={this.handleEndDateChange}
                                    />

                                </div>
                            </div>
                        </div>
                        <h4>Event Info (max 250 chars)</h4>
                        <textarea className="add-event-info center" ref={this.description} maxLength="250" required>

                        </textarea>


                    </fieldset>
                    <button type="submit" className="form-submit-button">Submit</button>
                    {this.state.error && <p className="error">{this.state.error}</p>}
                </form>
            </div>
        )
    }
}

export default AddEvent