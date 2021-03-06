import React from 'react';
import DSContext from '../../contexts/DSContext';
import DownstreamApiService from '../../services/downstream-api-service';
import TokenServices from '../../services/token-service';

class EventButtons extends React.Component {
    static contextType = DSContext;

    handleSetEventInfo = () => {
        this.context.setEventInfo(this.props.event);
    }

    handleAddedAlert = () => {
        alert('Event already added!');
    }

    handlePastAlert = () => {
        alert('Event has already passed. Cannot add to schedule.');
    }

    handleDeleteFromSchedule = () => {
        const itemId = this.props.event.id;

        DownstreamApiService.deleteScheduleItem(itemId, this.context.deleteScheduleItem)
            .then(res => {
            })
            .catch(this.context.setError)
    }

    handleAddEventToSchedule = () => {
        const eventId = this.props.event.id;


        const newRawScheduleItem = {
            event_id: eventId
        };



        DownstreamApiService.postScheduleItem(newRawScheduleItem)
            .then(item => {


                this.context.addScheduleItem(item);

                DownstreamApiService.getEvents()
                .then(events => {
                  this.context.setEvents(events);
                })
                .catch(this.setError)

                DownstreamApiService.getSchedule()
                .then(items => {
                  this.context.setSchedule(items);
                })
                .catch(this.setError)
            })
            .catch(this.context.setError)
    }

    handleLoginAlert = () => {
        alert('Must log in to add to schedule.')
    }

    render() {

        return (
            <div className={this.props.showInfo ? "event-button-container center" : "event-button-container moveUp center"}>
                <div className="icon-container">
                    <a href={this.props.event.info_url} target="_blank"> <i className="fas fa-link white"></i> </a>
                </div>
                <div className="icon-container">
                    <a href={this.props.event.stream_url} target="_blank"><i className="fas fa-desktop white"></i></a>
                </div>
                {TokenServices.hasAuthToken() && this.props.event.past && <div className="icon-container" onClick={this.handlePastAlert}>
                    <i className="fas fa-plus-circle invalid"></i>
                </div>}

                {!TokenServices.hasAuthToken() && <div className="icon-container" onClick={this.handleLoginAlert}>
                    <i className="fas fa-plus-circle invalid"></i>
                </div>}
                {!this.props.event.added && !this.props.event.past && TokenServices.hasAuthToken() && <div className="icon-container" onClick={this.handleAddEventToSchedule}>
                    <i className="fas fa-plus-circle added"></i>
                </div>}
                {this.props.event.added && !this.props.event.past && TokenServices.hasAuthToken() && <div className="icon-container" onClick={this.handleAddedAlert}>
                    <i className="far fa-check-square added"></i>
                </div>}
            </div>
        )
    }
}

export default EventButtons