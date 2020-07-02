import React from 'react'

class EventOverlay extends React.Component {
    render() {
        let description = this.props.event.description;
        if(this.props.event.description.length > 50) {
            description = this.props.event.description.split(' ')

            let length = 0;
            let i = 0;
            while(length < 50) {
                length += description[i].length;
                i++;
            }

            description = description.slice(0, i).join(' ') + '...'
        }

        const startDate = this.props.event.start_date.toLocaleString().slice(5,10).split('-').join('/')
        const endDate = this.props.event.end_date.toLocaleString().slice(5,10).split('-').join('/')

        return (
            <div className={this.props.showInfo ? "info-overlay-image center" : "info-overlay-image fadeOut center"} style={{ backgroundImage: `url('${this.props.event.image_url}')` }}>
                <div className="info-overlay-background">
                    <div className="info-description">
                        {description}
                    </div>
                    <div className="info-artists">
                        <h4>Artists:</h4>
                        {description}
                    </div>
                    <div className="misc-info-container">
                        <div className="date-info">
                            <h4>Dates</h4>
                            <p>{startDate} to {endDate}</p>
                        </div>
                        <div className="genre-info">
                            <h4>Genre</h4>
                            <p>{this.props.event.genre}</p>
                        </div>
                        {/* <div className="platform-info">
                            <h4>Platform</h4>
                            <p>{this.props.event.platform}</p>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default EventOverlay