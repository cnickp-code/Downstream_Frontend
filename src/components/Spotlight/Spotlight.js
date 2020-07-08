import React from 'react';
import { NavLink } from 'react-router-dom';
import DSContext from '../../contexts/DSContext';
import SpotlightEvent from '../../components/SpotlightEvent/SpotlightEvent';
import EventInfo from '../EventInfo/EventInfo';
import EventCoverImage from '../EventCoverImage/EventCoverImage';

class Spotlight extends React.Component {
    static contextType = DSContext;

    render() {
        
        const event = this.context.events[0];
        
        return (
            <main>
                {this.context.showEventInfo && <EventInfo />}
                {this.context.showCoverImage && <EventCoverImage />}
                <h1 className="spotlight-header">Spotlight</h1>
                <div className="spotlight-container">
                    {this.context.events[0] && <SpotlightEvent event={event} />}
                    <p className="center center-text">Click the flyer for more info!</p>
                    <div className="home-container">
                        <NavLink to="/events" className="home-event-button1 center">See All Events >></NavLink>
                    </div>
                </div>
                <div className="parallax">
                    <div className="home-image1">
                    </div>
                </div>
                <div className="home-news-container">

                    <h2 className="news-text">Need the scoop on the latest?</h2>
                    <div className="home-container">
                        <NavLink to="/news" className="home-event-button2 center">News >></NavLink>
                    </div>
                </div>
                <div className="parallax">
                    <div className="home-image2">
                    </div>
                </div>

                <div className="contact-container">
                    <div className="inner-contact-container center">
                        <div className="contact-left">

                        </div>
                        <div className="contact-right">
                            <h1>Contact me!</h1>
                            <h3 className="margin-top">Name:</h3>
                            <input type="text" className="contact-input" />
                            <h3 className="margin-top">Email:</h3>
                            <input type="text" className="contact-input" />
                            <h3 className="margin-top">Message:</h3>
                            <textarea className="contact-text">

                            </textarea>
                        </div>
                    </div>
                </div>
            </main >
        )
    }
}

export default Spotlight