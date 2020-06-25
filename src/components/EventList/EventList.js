import React from 'react'
import Event from '../Event/Event'
import DSContext from '../../contexts/DSContext'
import DownstreamApiService from '../../services/downstream-api-service'

class EventList extends React.Component {
    static contextType = DSContext;

    componentDidMount() {
        DownstreamApiService.getEvents()
          .then(this.context.setEvents)
          .catch(this.context.setError)
    }

    render() {
        const eventList = this.context.events.map(event => {
            return <Event key={event.id} event={event} />
        })

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