import React from 'react'
import DSContext from '../../contexts/DSContext'

class Event extends React.Component {
    static contextType = DSContext

    handleSetEventInfo = () => {
        this.context.setEventInfo(this.props.event)
    }

    render() {
        const currentDate = new Date();
        const eventStartDate = new Date(this.props.event.start_date)
        const eventEndDate = new Date(this.props.event.end_date);
        let timeString

        let days = (eventEndDate - currentDate) / 86400000;
        let hours = Number('.' + days.toString().split('.')[1]) * 24;
        let minutes = Number('.' + hours.toString().split('.')[1]) * 60;

        if(currentDate.getTime() > eventEndDate.getTime()) {
            timeString = `Event has passed :(`
        }
        if(currentDate.getTime() > eventStartDate.getTime() && currentDate.getTime() < eventEndDate.getTime()) {
            timeString = `Happening now!!`
        }
        if(currentDate.getTime() < eventStartDate.getTime()) {
            timeString = `${Math.floor(days)} days, ${Math.floor(hours)} hours, and ${Math.floor(minutes)} minutes away!`
        }

        return (
            <div className="event-container">
                <div className="info-container" onClick={this.handleSetEventInfo}>
                    <div className="info-details">
                        <i class="fas fa-info-circle"></i>
                    </div>
                </div>
                <h3 className="center-text event-head-text">{this.props.event.name}</h3>
                <p class="event-time center">{timeString}</p>
                <img src={this.props.event.image_url} className="event-image .box-shadow" alt="event" />
                {/* <div className="event-button-container">
                    <button className="details-button event-info" onClick={this.handleSetEventInfo}>View Details</button>
                </div> */}
            </div>
        )
    }
}

export default Event