import React from 'react';
import DSContext from '../../contexts/DSContext';

class SpotlightEvent extends React.Component {
    static contextType = DSContext;

    handleSetEventInfo = () => {
        this.context.setEventInfo(this.props.event);
    }
    
    render() {

        return (
            <div className="spot-event-container">
                <img src={this.props.event.image_url} className="spotlight-event-image box-shadow" alt="event" onClick={this.handleSetEventInfo}/>
            </div>
        )
    }
}

export default SpotlightEvent