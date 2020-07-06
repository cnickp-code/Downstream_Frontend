import React from 'react'
import Spotlight from '../Spotlight/Spotlight';
import EventOverlay from '../EventOverlay/EventOverlay';


class SpotlightEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showOverlayInfo: false
        }
    }

    handleSetEventInfo = () => {
        this.setState({
            showOverlayInfo: true
        })
    }

    handleHideEventInfo = () => {
        this.setState({
            showOverlayInfo: false
        })
    }

    componentDidMount() {
        console.log('hello')
        // DownstreamApiService.getEvents()
        //   .then(events => {
        //       console.log('added events')
        //       this.context.setEvents(events)
        //   })
        //   .catch(this.context.setError)
    }
    
    render() {
        const currentDate = new Date();
        const eventStartDate = new Date(this.props.event.start_date)
        const eventEndDate = new Date(this.props.event.end_date);
        let timeString

        let days = (eventEndDate - currentDate) / 86400000;
        let hours = Number('.' + days.toString().split('.')[1]) * 24;
        let minutes = Number('.' + hours.toString().split('.')[1]) * 60;

        if (currentDate.getTime() > eventEndDate.getTime()) {
            timeString = `Event has passed :(`
        }
        if (currentDate.getTime() >= eventStartDate.getTime() && currentDate.getTime() <= eventEndDate.getTime()) {
            timeString = `Happening now!!`
        }
        if (currentDate.getTime() < eventStartDate.getTime()) {
            timeString = `${Math.floor(days)} days, ${Math.floor(hours)} hours, and ${Math.floor(minutes)} minutes away!`
        }

        return (
            <div className="spot-event-container">
                <h3 className="center-text event-head-text">{this.props.event.name}   <i className="fas fa-tint margin-left"></i>  {this.props.event.event_popularity}</h3>
                <p className="event-time center">{timeString}</p>
                <h3 className="center"></h3> 
                <img src={this.props.event.image_url} className="spotlight-event-image box-shadow" alt="event" onClick={this.handleSetEventInfo}/>
                {/* {this.state.showOverlayInfo
                    ? <EventOverlay event={this.props.event} showInfo={this.state.showOverlayInfo} hideInfo={this.handleHideEventInfo}/>
                    : <img src={this.props.event.image_url} className="spotlight-event-image box-shadow" alt="event" onClick={this.handleSetEventInfo}/>} */}
            </div>
        )
    }
}

export default SpotlightEvent