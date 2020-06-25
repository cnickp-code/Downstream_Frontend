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
        const scheduleList = this.context.schedule.map(event => {
            return <ScheduleEvent key={event.id} event={event} />
        })

        console.log(this.context.schedule)

        return (
            <div className="myevents-content-container">
                <h1 className="events-header">My Schedule</h1>
                <div className="bottom-container">
                {scheduleList}

                </div>

            </div>
        )
    }
}

export default ScheduleEventList