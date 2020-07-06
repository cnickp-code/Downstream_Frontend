import React from 'react'
import Event from '../Event/Event'
import DSContext from '../../contexts/DSContext'
import DownstreamApiService from '../../services/downstream-api-service'

class EventList extends React.Component {
    static contextType = DSContext;

    componentDidMount() {
        DownstreamApiService.getEvents()
          .then(events => {
              this.context.setEvents(events)
          })
          .catch(this.context.setError)
    }

    render() {

        let eventList
        
        if(this.context.searchTerm.length > 0) {
            eventList = this.context.searchEvents.map(event => {
                return <Event key={event.id} event={event} />
            })
        } else {
            eventList = this.context.events.map(event => {
                return <Event key={event.id} event={event} />
            })
        }





        return (
            
            <div className="myevents-content-container">
                <h1 className="events-header">Events</h1>
                <div className="bottom-container">
                    {eventList}
                </div>
            </div>
        )
    }
}

export default EventList