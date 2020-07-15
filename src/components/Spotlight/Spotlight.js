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
                <h1 className="spotlight-header">Home</h1>
                <div className="spotlight-container">
                    <h2 className="center center-text">Welcome to DownStream</h2>
                    <p className="center center-text mb-10">Never miss a live streamed music festival event ever again! </p>
                    <p className="center center-text">Sign up to access your schedule!</p>
                    <p className="center center-text margin-bottom">Click on the Events Tab to get started. There you will find all upcoming events as well as past events!</p>
                    <h2 className="center center-text">Example Event Picture:</h2>
                    <img src="https://i.ibb.co/bBqCNwH/Event.png" className="center margin-bottom" ></img>
                    <p className="center center-text">Click <i className="fas fa-link white"></i> to go to the event page.</p>
                    <p className="center center-text">Click <i className="fas fa-desktop white"></i> to go to the stream.</p>
                    <p className="center center-text">Log in/Sign up and click <i className="fas fa-plus-circle added"></i> to add to schedule.</p>
                    <p className="center center-text">Click <i className="fas fa-minus-circle trash"></i> on the schedule page to remove the event.</p>
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