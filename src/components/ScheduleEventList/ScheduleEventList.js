import React from 'react'
import ScheduleEvent from '../ScheduleEvent/ScheduleEvent'
import DSContext from '../../contexts/DSContext'
import DownstreamApiService from '../../services/downstream-api-service'

class ScheduleEventList extends React.Component {
    static contextType = DSContext

    componentDidMount() {
        this.context.clearError()

        DownstreamApiService.getSchedule()
        .then(this.context.setSchedule)
        .catch(this.context.setError)
    }
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