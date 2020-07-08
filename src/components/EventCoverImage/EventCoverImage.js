import React from 'react';
import DSContext from '../../contexts/DSContext';

class EventCoverImage extends React.Component {
    static contextType = DSContext;

    handleHideCoverImage = () => {
        this.context.toggleCoverImage();
        this.context.setEventInfo(this.context.event);
    }

    render() {
        return (
            <div className="cover" onClick={this.handleHideCoverImage}>
                <div className="cover-container">
                    <div className="cover-exit" onClick={this.handleHideCoverImage}>
                        <i className="far fa-times-circle"></i>
                    </div>
                    <img src={this.context.event.image_url}
                        className="cover-full-image center" alt="cover" />
                </div>
            </div>
        )
    }
}

export default EventCoverImage;