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
        
        const scheduleList = this.context.schedule.sort((a, b) => {
            let firstStartDate = new Date(a.start_date)
            let secondStartDate = new Date(b.start_date)
            return firstStartDate - secondStartDate
        }).map(event => {
            return <ScheduleEvent key={event.id} event={event} />
        })


        // let scheduleList

        // if(this.context.searchTerm.length > 0) {
        //     scheduleList = this.context.searchSchedule.map(item => {
        //         return <ScheduleEvent key={item.id} event={item} />
        //     })
        // } else {
        //     return scheduleList = this.context.schedule.map(event => {
        //         return <ScheduleEvent key={event.id} event={event} />
        //     })
        // }

        return (
            <div className="myevents-content-container">
                <h1 className="events-header">My Schedule</h1>
                <div className="bottom-schedule-container">
                {scheduleList}

                </div>

            </div>
        )
    }
}

export default ScheduleEventList