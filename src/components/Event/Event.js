import React from 'react'
import DSContext from '../../contexts/DSContext'
import EventOverlay from '../EventOverlay/EventOverlay'
import EventButtons from '../EventButtons/EventButtons'

class Event extends React.Component {
    static contextType = DSContext

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

        // const info =
        //     <div className="info-container" onClick={this.handleSetEventInfo}>
        //         <div className="info-details">
        //             <i className="fas fa-info-circle"></i>
        //         </div>
        //     </div>;

        // const exit =
        //     <div className="info-container" onClick={this.handleHideEventInfo}>
        //         <div className="info-details">
        //             <i class="far fa-times-circle"></i>
        //         </div>
        //     </div>;


        


        return (
            <div className="event-container">
                {/* {this.state.showOverlayInfo
                    ? exit
                    : info} */}


                <h3 className="center-text event-head-text">{this.props.event.name}   <i className="fas fa-tint margin-left"></i>  {this.props.event.event_popularity}</h3>
                <p className="event-time center">{timeString}</p>
                <h3 className="center"></h3>



                {this.state.showOverlayInfo
                    ? <EventOverlay event={this.props.event} showInfo={this.state.showOverlayInfo} hideInfo={this.handleHideEventInfo}/>
                    : <img src={this.props.event.image_url} className="event-image box-shadow" alt="event" onClick={this.handleSetEventInfo}/>}



                {/* {this.state.showEventInfo 
                    ? <EventButtons />
                    : } */}

                {this.state.showOverlayInfo && <EventButtons event={this.props.event} showInfo={this.state.showOverlayInfo} /> }


            </div>
        )
    }
}

export default Event