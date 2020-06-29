import React from 'react'
import DSContext from '../../contexts/DSContext'

class Event extends React.Component {
    static contextType = DSContext

    constructor(props) {
        super(props);
        this.state = {
            showEventInfo: false
        }
    }

    handleSetEventInfo = () => {
        this.setState({
            showEventInfo: true
        })
    }

    handleHideEventInfo = () => {
        this.setState({
            showEventInfo: false
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
        if (currentDate.getTime() > eventStartDate.getTime() && currentDate.getTime() < eventEndDate.getTime()) {
            timeString = `Happening now!!`
        }
        if (currentDate.getTime() < eventStartDate.getTime()) {
            timeString = `${Math.floor(days)} days, ${Math.floor(hours)} hours, and ${Math.floor(minutes)} minutes away!`
        }

        const info =
            <div className="info-container" onClick={this.handleSetEventInfo}>
                <div className="info-details">
                    <i className="fas fa-info-circle"></i>
                </div>
            </div>;

        const exit =
            <div className="info-container" onClick={this.handleHideEventInfo}>
                <div className="info-details">
                    <i class="far fa-times-circle"></i>
                </div>
            </div>;

        const overlay =
            <div className="info-overlay-image center" style={{ backgroundImage: `url('${this.props.event.image_url}')` }}>
                <div className="info-overlay-background">
                    <div className="info-description">
                        {this.props.event.description}
                    </div>
                    <div className="info-artists">
                        <h4>Artists:</h4>
                        {this.props.event.description}
                    </div>
                    <div className="misc-info-container">
                        <div className="date-info">
                            <h4>Dates</h4>
                            <p>Now-Then</p>
                        </div>
                        <div className="genre-info">
                            <h4>Genre</h4>
                            <p>{this.props.event.genre}</p>
                        </div>
                        <div className="platform-info">
                            <h4>Platform</h4>
                            <p>{this.props.event.platform}</p>
                        </div>
                    </div>
                </div>
            </div>;

        const buttons =
            <div className="event-button-container center">
                <div class="icon-container">
                    <i className="fas fa-info-circle info"></i>
                </div>
                <div class="icon-container">
                    <i class="fas fa-stream stream"></i>
                </div>
                <div class="icon-container">
                    <i class="fas fa-scroll scroll"></i>
                </div>
                <div class="icon-container">
                    <i class="fas fa-plus-circle added"></i>
                </div>
            </div>;

        return (
            <div className="event-container">
                {!this.state.showEventInfo && info}
                {this.state.showEventInfo && exit}


                <h3 className="center-text event-head-text">{this.props.event.name}</h3>
                <p className="event-time center">{timeString}</p>

                {!this.state.showEventInfo && <img src={this.props.event.image_url} className="event-image .box-shadow" alt="event" />}
                {this.state.showEventInfo && overlay}

                {this.state.showEventInfo && buttons}
            </div>
        )
    }
}

export default Event