import React from 'react'
import DSContext from '../../contexts/DSContext'
import DownstreamApiService from '../../services/downstream-api-service'
import TokenServices from '../../services/token-service'

class EventButtons extends React.Component {
    static contextType = DSContext

    handleSetEventInfo = () => {
        this.context.setEventInfo(this.props.event)
    }

    handleAddedAlert = () => {
        alert('Event already added!')
    }

    handleDeleteFromSchedule = () => {
        const itemId = this.props.event.id

        DownstreamApiService.deleteScheduleItem(itemId, this.context.deleteScheduleItem)
            .then(res => {
                console.log('hello')
            })
            .catch(this.context.setError)
    }

    handleAddEventToSchedule = () => {
        const eventId = this.props.event.id
        const eventDescription = this.props.event.description
        const eventGenre = this.props.event.genre
        const eventImageUrl = this.props.event.image_url
        const eventInfoUrl = this.props.event.info_url
        const eventStreamUrl = this.props.event.stream_url
        const eventStartDate = this.props.event.start_date
        const eventEndDate = this.props.event.end_date

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

        // console.log(newScheduleItem)



        DownstreamApiService.postScheduleItem(newRawScheduleItem)
            .then(item => {
                console.log(item)
                this.context.addScheduleItem(item)
            })
            .catch(this.context.setError)
    }

    render() {

        console.log(this.props.event.added)

        return (
            <div className={this.props.showInfo ? "event-button-container center" : "event-button-container moveUp center"}>
                <div className="icon-container">
                    <i className="fas fa-info-circle info" onClick={this.handleSetEventInfo}></i>
                </div>
                <div className="icon-container">
                    <a href={this.props.event.stream_url}><i className="fas fa-stream stream"></i></a>
                </div>
                <div className="icon-container">
                    <a href={this.props.event.info_url}> <i className="fas fa-scroll scroll"></i> </a>
                </div>

                {!this.props.event.added && TokenServices.hasAuthToken() && <div className="icon-container" onClick={this.handleAddEventToSchedule}>
                    <i className="fas fa-plus-circle added"></i>
                </div>}
                {this.props.event.added && TokenServices.hasAuthToken() && <div className="icon-container" onClick={this.handleAddedAlert}>
                    <i class="far fa-check-square added"></i>
                </div>}
                
                {/* {this.props.event.added && TokenServices.hasAuthToken() && <div className="icon-container" onClick={this.handleDeleteFromSchedule}>
                    <i class="far fa-check-square"></i>
                </div>} */}
            </div>
        )
    }
}

export default EventButtons