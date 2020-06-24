import React from 'react'

class Event extends React.Component {

    render() {
        return (
            <div className="event-container">
                <h3 className="center-text">{this.props.event.name}</h3>
                <img src={this.props.event.image_url} className="event-image" alt="event"/>
                <div className="event-button-container">
                    <a href="/eventinfo.html" className="details-button event-info">View Details</a>
                </div>
            </div>
        )
    }
}

export default Event