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
                <div className="delete-container" onClick={this.handleDeleteFromSchedule}>
                    <div className="info-details trash">
                    <i class="fas fa-trash-alt"></i>
                    </div>
                </div>
                <h3 className="center-text event-head-text">{this.props.event.name}</h3>
                <p class="event-time center">{timeString}</p>
                <img src={this.props.event.image_url} className="event-image" alt="event" />
            </div>
        )
    }
}

export default ScheduleEvent