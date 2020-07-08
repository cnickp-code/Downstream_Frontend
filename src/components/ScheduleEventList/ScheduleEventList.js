import React from 'react';
import ScheduleEvent from '../ScheduleEvent/ScheduleEvent';
import DSContext from '../../contexts/DSContext';
import DownstreamApiService from '../../services/downstream-api-service';

class ScheduleEventList extends React.Component {
    static contextType = DSContext;

    handleToggleSideBar = () => {
        this.context.toggleSideBar();
    }

    componentDidMount() {
        this.context.clearError();

        DownstreamApiService.getSchedule()
        .then(this.context.setSchedule)
        .catch(this.context.setError)
    }
    render() {

        let scheduleList;
        
        if(this.context.searchTerm.length > 0) {
            scheduleList = this.context.searchSchedule;
        } else {
            scheduleList = this.context.schedule;
        }

        let pastEvents = [];
        let mainSchedule = [];
        const currentDate = new Date();

        scheduleList.forEach(event => {
            let eventStartDate = new Date(event.start_date);
            if(eventStartDate - currentDate < 0) {
                pastEvents.push(event);
            } else {
                mainSchedule.push(event);
            }
        })

        pastEvents = pastEvents.sort((a, b) => {
            let firstStartDate = new Date(a.start_date);
            let secondStartDate = new Date(b.start_date);
            return secondStartDate - firstStartDate;
        }).map(event => {
            return <ScheduleEvent key={event.id} event={event} />;
        })

        mainSchedule = mainSchedule.sort((a, b) => {
            let firstStartDate = new Date(a.start_date);
            let secondStartDate = new Date(b.start_date);
            return secondStartDate - firstStartDate;
        }).map(event => {
            return <ScheduleEvent key={event.id} event={event} />;
        })

        if (pastEvents.length === 0) {
            pastEvents = <p className="align-center center margin-bottom">No Events To Display</p>;
        }
        if (mainSchedule.length === 0) {
            mainSchedule = <p className="align-center center margin-bottom">No Events To Display</p>;
        }

        let sideBarFab

        if (this.context.showSideBar) {
            sideBarFab = 
                <div className="sidebar-fab-container-open" onClick={this.handleToggleSideBar}>
                    <div className="sidebar-fab">
                        <i className="fas fa-search"></i>
                    </div>
                </div>;
        } else {
            sideBarFab = 
                <div className="sidebar-fab-container" onClick={this.handleToggleSideBar}>
                    <div className="sidebar-fab">
                        <i className="fas fa-search"></i>
                    </div>
                </div>;
        }

        return (
            <div className="myevents-content-container">
                <h1 className="events-header">
                    {sideBarFab}
                    My Schedule
                </h1>
                <div className="bottom-container">
                    <div className="bottom-date-container" >
                        {mainSchedule}
                    </div>
                    <hr />
                    <h2 className="margin">Past Events:</h2>
                    <div className="bottom-date-container">
                        {pastEvents}
                    </div>
                </div>

            </div>
        )
    }
}

export default ScheduleEventList