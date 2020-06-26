import React from 'react'
import DSContext from '../../contexts/DSContext'
import DownstreamApiService from '../../services/downstream-api-service'

class EventInfo extends React.Component {
    static contextType = DSContext

    handleHideEventInfo = () => {
        this.context.hideEventInfo();
    }

    handleAddEventToSchedule = () => {
        const eventId = this.context.event.id
        const eventDescription = this.context.event.description
        const eventGenre = this.context.event.genre
        const eventImageUrl = this.context.event.image_url
        const eventInfoUrl = this.context.event.info_url
        const eventStreamUrl = this.context.event.stream_url
        const eventStartDate = this.context.event.start_date
        const eventEndDate = this.context.event.end_date

        const newScheduleItem = {
            event_id: eventId,
            description: eventDescription,
            genre: eventGenre,
            image_url: eventImageUrl,
            info_url: eventInfoUrl,
            stream_url: eventStreamUrl,
            start_date: eventStartDate,
            end_date: eventEndDate
        }

        const newRawScheduleItem = {
            event_id: eventId
        }

        console.log(newScheduleItem)

        DownstreamApiService.postScheduleItem(newRawScheduleItem)
            .then(res => {
                console.log(res)
                this.context.addScheduleItem(res)
                this.context.hideEventInfo()
            })
            .catch(this.context.setError)
    }

    render() {
        const startDate = this.context.event.start_date;
        const endDate = this.context.event.end_date;

        console.log(startDate)
        console.log(endDate)
        return (
            <div className="cover">
                <div className="cover-container">
                    <div className="cover-exit" onClick={this.handleHideEventInfo}></div>
                    <h1 className="cover-event-title">{this.context.event.name}</h1>
                    <img src={this.context.event.image_url}
                        className="cover-event-image center" alt="cover" />
                    <div className="cover-event-info center">
                        {this.context.event.description}
                    <h3 className="cover-inner-title">Dates:</h3>
                        <div className="cover-list">Now - Then</div>
                        <h3 className="cover-inner-title">Genre:</h3>
                        <div className="cover-list">{this.context.event.genre}</div>
                        <h3 className="cover-inner-title">Platform:</h3>
                        <div className="cover-list">{this.context.event.platform}</div>
                    </div>
                    <div className="cover-link-container center">
                        <a href="/" className="cover-nav-link">Link to Stream</a>
                        <button className="cover-nav-link" onClick={this.handleAddEventToSchedule}>Add to Schedule</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventInfo