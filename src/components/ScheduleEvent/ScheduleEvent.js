import React from 'react'
import DSContext from '../../contexts/DSContext'
import DownstreamApiService from '../../services/downstream-api-service'

class ScheduleEvent extends React.Component {
    static contextType = DSContext

    handleSetEventInfo = () => {
        this.context.setEventInfo(this.props.event)
    }

    handleDeleteFromSchedule = () => {
        const itemId = this.props.event.id

        DownstreamApiService.deleteScheduleItem(itemId, this.context.deleteScheduleItem)
            .catch(this.context.setError)
    }

    render() {
        return (
            <div className="event-container">
                <h3 className="center-text">{this.props.event.name}</h3>
                <img src={this.props.event.image_url} className="event-image" alt="event" />
                <div className="event-button-container">
                    <button className="details-button event-info" onClick={this.handleSetEventInfo}>View Details</button>
                    <button className="details-button event-info" onClick={this.handleDeleteFromSchedule}>Remove</button>
                </div>
            </div>
        )
    }
}

export default ScheduleEvent