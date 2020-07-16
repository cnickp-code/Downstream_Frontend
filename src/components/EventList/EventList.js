import React from 'react';
import Event from '../Event/Event';
import DSContext from '../../contexts/DSContext';
import DownstreamApiService from '../../services/downstream-api-service';

class EventList extends React.Component {
    static contextType = DSContext;

    handleToggleSideBar = () => {
        this.context.toggleSideBar();
    }

    componentDidMount() {
        DownstreamApiService.getEvents()
            .then(events => {
                this.context.setEvents(events);
            })
            .catch(this.context.setError)
    }

    render() {

        let eventList;

        if (this.context.searchTerm.length > 0) {
            eventList = this.context.searchEvents;
        } else {
            eventList = this.context.events;
        }



        let eventsToday = [];
        let eventsInAWeek = [];
        let eventsFuture = [];
        let pastEvents = [];
        let now = new Date();
        let currentDate = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
       

        eventList.forEach(event => {
            let eventStartDate = new Date(event.start_date);
            console.log(currentDate)
            console.log(eventStartDate)
            console.log('------------')
            if ((eventStartDate - currentDate) > 0 && (eventStartDate - currentDate) < 86400000) {
                eventsToday.push(event);
            } else if ((eventStartDate - currentDate) > 86400000 && (eventStartDate - currentDate) < 604800000) {
                eventsInAWeek.push(event);
            } else if ((eventStartDate - currentDate) > 604800000) {
                eventsFuture.push(event);
            } else {
                pastEvents.push(event);
            }
        })

        eventsToday = eventsToday.sort((a, b) => {
            let firstStartDate = new Date(a.start_date);
            let secondStartDate = new Date(b.start_date);
            return firstStartDate - secondStartDate;
        }).map(event => {
            return <Event key={event.id} event={event} />;
        })
        eventsInAWeek = eventsInAWeek.sort((a, b) => {
            let firstStartDate = new Date(a.start_date);
            let secondStartDate = new Date(b.start_date);
            return firstStartDate - secondStartDate;
        }).map(event => {
            return <Event key={event.id} event={event} />;
        })
        eventsFuture = eventsFuture.sort((a, b) => {
            let firstStartDate = new Date(a.start_date);
            let secondStartDate = new Date(b.start_date);
            return firstStartDate - secondStartDate;
        }).map(event => {
            return <Event key={event.id} event={event} />;
        })
        pastEvents = pastEvents.sort((a, b) => {
            let firstStartDate = new Date(a.start_date);
            let secondStartDate = new Date(b.start_date);
            return firstStartDate - secondStartDate;
        }).map(event => {
            return <Event key={event.id} event={event} />;
        })

        if (eventsToday.length === 0) {
            eventsToday = <p className="align-center center margin-bottom">No Events Today</p>;
        }
        if (eventsInAWeek.length === 0) {
            eventsInAWeek = <p className="align-center center margin-bottom">No Events This Week</p>;
        }
        if (eventsFuture.length === 0) {
            eventsFuture = <p className="align-center center margin-bottom">No Events To Display</p>;
        }
        if (pastEvents.length === 0) {
            pastEvents = <p className="align-center center margin-bottom">No Events To Display</p>;
        }

        let sideBarFab;

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
                    Events
                </h1>
                <div className="bottom-container">
                    <h2 className="margin">Events Within 24Hrs:</h2>
                    <div className="bottom-date-container">
                        {eventsToday}
                    </div>
                    <hr />
                    <h2 className="margin">Events Within A Week:</h2>
                    <div className="bottom-date-container">
                        {eventsInAWeek}
                    </div>
                    <hr />
                    <h2 className="margin">Events Later:</h2>
                    <div className="bottom-date-container">
                        {eventsFuture}
                    </div>
                    <hr />

                    {this.context.showPastEvents && 
                    <>
                        <h2 className="margin">Past Events:</h2>
                        <div className="bottom-date-container">
                            {pastEvents}
                        </div>
                        <hr />
                    </>}
                </div>
            </div>
        )
    }
}

export default EventList