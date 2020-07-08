import React from 'react';
import DSContext from '../../contexts/DSContext';
import DownstreamApiService from '../../services/downstream-api-service';

class EventInfo extends React.Component {
    static contextType = DSContext;

    handleHideEventInfo = () => {
        this.context.hideEventInfo();
    }

    handleAddEventToSchedule = () => {
        const eventId = this.context.event.id;

        const newRawScheduleItem = {
            event_id: eventId
        }

        DownstreamApiService.postScheduleItem(newRawScheduleItem)
            .then(item => {
                this.context.addScheduleItem(item);
                this.context.hideEventInfo();
            })
            .catch(this.context.setError)
    }

    handleShowCoverImage = () => {
        this.context.toggleCoverImage();
        this.context.hideEventInfo();
    }

    render() {
        const startDate = this.context.event.start_date.toLocaleString().slice(5,10).split('-').join('/');
        const endDate = this.context.event.end_date.toLocaleString().slice(5,10).split('-').join('/');


        return (
            <div className="cover" onClick={this.handleHideEventInfo}>
                <div className="cover-container">
                    <div className="cover-exit" onClick={this.handleHideEventInfo}>
                        <i className="far fa-times-circle"></i>
                    </div>
                    <h1 className="cover-event-title">{this.context.event.name}</h1>
                    <h3 className=" center">Dates:</h3>
                        <div className="cover-list center">{startDate} to {endDate}</div>
                    <img src={this.context.event.image_url}
                        className="cover-event-image center" alt="cover" onClick={this.handleShowCoverImage}/>
                    <div className="cover-event-info center">
                        {this.context.event.description}
                        <h3 className="cover-inner-title">Artists:</h3>
                        <div className="cover-list">{this.context.event.artists}</div>
 
                        <h3 className="cover-inner-title">Genre:</h3>
                        <div className="cover-list">{this.context.event.genre}</div>
                        <h3 className="cover-inner-title">Platform:</h3>
                        <div className="cover-list">{this.context.event.platform}</div>
                    </div>
                    {this.context.event.added && <p className="added center margin-top">Event already added to schedule!</p>}
                </div>
            </div>
        )
    }
}

export default EventInfo