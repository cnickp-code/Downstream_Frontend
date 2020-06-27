import React from 'react'
import DSContext from '../../contexts/DSContext'

class Event extends React.Component {
    static contextType = DSContext

    handleSetEventInfo = () => {
        this.context.setEventInfo(this.props.event)
    }

    render() {
        return (
            <div className="event-container">
                <div className="info-container" onClick={this.handleSetEventInfo}>
                    <div className="info-details">
                        <i class="fas fa-info-circle"></i>
                    </div>
                </div>
                <h3 className="center-text event-head-text">{this.props.event.name}</h3>
                <img src={this.props.event.image_url} className="event-image .box-shadow" alt="event" />
                {/* <div className="event-button-container">
                    <button className="details-button event-info" onClick={this.handleSetEventInfo}>View Details</button>
                </div> */}
            </div>
        )
    }
}

export default Event