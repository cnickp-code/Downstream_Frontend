import React from 'react'

class ScheduleEvent extends React.Component {
    render() {
        return (
            <div className="event-container">
                <h3 className="center-text">Event Title</h3>
                <img src="https://billetto.co.uk/blog/wp-content/uploads/2019/06/zhqczjr9fho-e1560853535167.jpg" className="event-image" alt="event" />
                <div className="event-button-container">
                    <a href="/eventinfo.html" className="details-button event-info">View Details</a>
                    <a href="/" className="details-button event-info">Remove</a>
                </div>
            </div>
        )
    }
}

export default ScheduleEvent