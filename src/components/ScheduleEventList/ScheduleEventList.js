import React from 'react'
import ScheduleEvent from '../ScheduleEvent/ScheduleEvent'

class ScheduleEventList extends React.Component {
    render() {
        return (
            <div className="myevents-content-container">
                <h1 className="events-header">My Schedule</h1>
                <div className="bottom-container">
                    <ScheduleEvent />
                    <ScheduleEvent />
                    <ScheduleEvent />

                </div>

            </div>
        )
    }
}

export default ScheduleEventList