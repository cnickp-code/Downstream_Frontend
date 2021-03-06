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
        let eventsFuture = [];
        let pastEvents = [];
        let now = new Date();
        let currentDate = new Date(now.getTime() + now.getTimezoneOffset() * 60000);

       

        eventList.forEach(event => {
            let eventStartDate = new Date(event.start_date);
            let eventEndDate = new Date(event.end_date);

            if (currentDate > eventStartDate && currentDate < eventEndDate) {
                eventsToday.push(event);
            } else if ((eventEndDate - currentDate) > 0) {
                eventsFuture.push(event);
            } else {
                pastEvents.push(event);
            }

            // else if ((eventStartDate - currentDate) > 604800000)
        })

        eventsToday = eventsToday.sort((a, b) => {
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
            eventsToday = <p className="align-center center margin-bottom">No Events To Display</p>;
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
                    <h2 className="margin">Events Happening Today!</h2>
                    <p className="xs-text"><i>Click on the flyers for more info!</i></p>
                    <div className="bottom-date-container">
                        {eventsToday}
                    </div>
                    <hr />
                    <h2 className="margin">Events Happening Soon</h2>
                    <div className="bottom-date-container">
                        {eventsFuture}
                    </div>
                    <hr />

                    {this.context.showPastEvents && 
                    <>
                        <h2 className="margin">Past Events</h2>
                        <div className="bottom-date-container">
                            {pastEvents}
                        </div>
                        <hr />
                    </>}
                </div>
                <div className="space-container">

                </div>
            </div>
        )
    }
}

export default EventList