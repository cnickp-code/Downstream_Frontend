import React from 'react'
import Event from '../Event/Event'

class EventList extends React.Component {
    render() {
        return (
            <div className="myevents-content-container">
                <h1 className="events-header">Events</h1>
                <div className="bottom-container">
                    <Event />
                    <Event />
                    <Event />

                </div>
            </div>
        )
    }
}

export default EventList