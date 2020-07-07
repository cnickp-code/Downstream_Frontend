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
        // this.setState({
        //     showOverlayInfo: true
        // })
        this.context.setEventInfo(this.props.event)
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

        // let description = this.props.event.description;
        // if(this.props.event.description.length > 50) {
        //     description = this.props.event.description.split(' ')

        //     let length = 0;
        //     let i = 0;
        //     while(length < 60 && description[i] !== undefined) {
        //         length += description[i].length;
        //         i++;
        //     }

        //     if(description[i] === undefined) {
        //         description = description.slice(0, i).join(' ')
        //     } else {
        //         description = description.slice(0, i).join(' ') + '...'
        //     }
            
        // }

        let artists = this.props.event.artists;

        // artists = artists.split(', ').map(artist => {
        //     return <div className="artist">{artist}</div>
        // }).join(', ')

        if(this.props.event.artists.length > 50) {
            artists = this.props.event.artists.split(', ')

            let length = 0;
            let i = 0;
            while(length < 50) {
                length += artists[i].length;
                i++;
            }

            artists = artists.slice(0, i).join(', ') + '...'
        }

        const startDate = this.props.event.start_date.toLocaleString().slice(5,10).split('-').join('/')
        const endDate = this.props.event.end_date.toLocaleString().slice(5,10).split('-').join('/')



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

                <h3 className="event-head-text">{this.props.event.name}</h3>
                <p className="event-time">{timeString}</p>



                <h3 className="center"></h3>

                <div className="event-inner-container">
                    <img src={this.props.event.image_url} className="event-image box-shadow" alt="event" onClick={this.handleSetEventInfo}/>   
                    <div className="event-right-container">
                    
                    
                        {/* <div>{description}</div> */}
                        <div className="info-artists">
                            <h4>Artists:</h4>
                            {artists}
                        </div>
                        <hr />
                        <h3> <i className="fas fa-tint"></i>  {this.props.event.event_popularity} dropping in.</h3>
                        <EventButtons event={this.props.event} showInfo={this.state.showOverlayInfo} />
                    </div>
                </div>

                {/* {this.state.showOverlayInfo
                    ? <EventOverlay event={this.props.event} showInfo={this.state.showOverlayInfo} hideInfo={this.handleHideEventInfo}/>
                    : <img src={this.props.event.image_url} className="event-image box-shadow" alt="event" onClick={this.handleSetEventInfo}/>}

{this.state.showOverlayInfo && <EventButtons event={this.props.event} showInfo={this.state.showOverlayInfo} /> } */}

                {/* {this.state.showEventInfo 
                    ? <EventButtons />
                    : } */}

                


            </div>
        )
    }
}

export default Event