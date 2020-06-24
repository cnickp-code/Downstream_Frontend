import React from 'react'
import Event from '../Event/Event'
import DSContext from '../../contexts/DSContext'

class EventList extends React.Component {
    static contextType = DSContext;
    
    render() {

        console.log(this.context.events)

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