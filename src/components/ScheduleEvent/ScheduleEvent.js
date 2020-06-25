import React from 'react'
import DSContext from '../../contexts/DSContext'

class ScheduleEvent extends React.Component {
    static contextType = DSContext

    handleSetEventInfo = () => {
        this.context.setEventInfo(this.props.event)
    }

    render() {
        return (
            <div className="event-container">
                <h3 className="center-text">{this.props.event.name}</h3>
                <img src={this.props.event.image_url} className="event-image" alt="event" />
                <div className="event-button-container">
                    <button className="details-button event-info" onClick={this.handleSetEventInfo}>View Details</button>
                    <button  className="details-button event-info">Remove</button>
                </div>
            </div>
        )
    }
}

export default ScheduleEvent