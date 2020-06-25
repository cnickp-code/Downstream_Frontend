import React from 'react'
import DSContext from '../../contexts/DSContext'

class EventInfo extends React.Component {
    static contextType = DSContext

    handleHideEventInfo = () => {
        this.context.hideEventInfo();
    }

    render() {
        const startDate = this.context.event.start_date;
        const endDate = this.context.event.end_date;

        console.log(startDate)
        console.log(endDate)
        return (
            <div className="cover">
                <div className="cover-container">
                    <div className="cover-exit" onClick={this.handleHideEventInfo}></div>
                    <h1 className="cover-event-title">{this.context.event.name}</h1>
                    <img src={this.context.event.image_url}
                        className="cover-event-image center" alt="cover" />
                    <div className="cover-event-info center">
                        {this.context.event.description}
                    <h3 className="cover-inner-title">Dates:</h3>
                        <div className="cover-list">Now - Then</div>
                        <h3 className="cover-inner-title">Genre:</h3>
                        <div className="cover-list">{this.context.event.genre}</div>
                        <h3 className="cover-inner-title">Platform:</h3>
                        <div className="cover-list">{this.context.event.platform}</div>
                    </div>
                    <div className="cover-link-container center">
                        <a href="/" className="cover-nav-link">Link to Stream</a>
                        <a href="/" className="cover-nav-link">Add to Schedule</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventInfo