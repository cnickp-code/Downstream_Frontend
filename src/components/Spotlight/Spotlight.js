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
                <div className="landing-container">
                    <div className="landing-inner">
                        <h2 className="center center-text pad-left pad-right font-family-2 spotlight-list-header">Welcome to DownStream</h2>
                        <p className="center center-text pad-left pad-right spotlight-list-innertext font-family-2">Never miss a live streamed music event ever again! </p>
                        <p className="center center-text pad-left pad-right spotlight-list-innertext2 font-family-2"><NavLink to='/signup' className="white"><b><i>Sign up</i></b></NavLink> to access your schedule!</p>
                    </div>

                </div>
                <div className="spotlight-container">
                    
                    <h2 className="center center-text font-family-2">Page Navigation</h2>
                    <div className="landing-image-container">
                        <img src="https://i.ibb.co/72ppTxm/Event3.png" className="center margin-bottom home-image" ></img>
                        <img src="https://i.ibb.co/Ps2cffP/navigation.png" className="center margin-bottom home-image3" ></img>
                    </div>
                    <div className="home-container">
                        <NavLink to="/events" className="home-event-button1 center">See All Events >></NavLink>
                    </div>
                </div>
                {/* <div className="parallax">
                    <div className="home-image1">
                    </div>
                </div> */}
                <div className="home-news-container">

                    <h2 className="news-text">Need the scoop on the latest?</h2>
                    <div className="home-container">
                        <a href="https://twitter.com/Downstr90019240" target="_blank" className="home-event-button2 center">Follow Us >></a>
                    </div>
                </div>
                {/* <div className="parallax">
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
                </div> */}
            </main >
        )
    }
}

export default Spotlight