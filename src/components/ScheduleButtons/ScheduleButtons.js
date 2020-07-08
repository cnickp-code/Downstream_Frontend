import React from 'react';
import DSContext from '../../contexts/DSContext';
import DownstreamApiService from '../../services/downstream-api-service';

class ScheduleButtons extends React.Component {
    static contextType = DSContext;

    handleSetEventInfo = () => {
        this.context.setEventInfo(this.props.event);
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
            })
            .catch(this.context.setError);
    }

    render() {


        return (
            <div className={this.props.showInfo ? "event-button-container center" : "event-button-container moveUp center"}>
                <div className="icon-container">
                    <a href={this.props.event.info_url}> <i class="fas fa-link white"></i> </a>
                </div>
                <div className="icon-container">
                    <a href={this.props.event.stream_url}><i class="fas fa-desktop white"></i></a>
                </div>


                <div className="icon-container" >
                    <i class="fas fa-minus-circle trash" onClick={this.handleDeleteFromSchedule}></i>
                </div>
                
            </div>
        )
    }
}

export default ScheduleButtons