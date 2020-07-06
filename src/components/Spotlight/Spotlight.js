import React from 'react';
import { NavLink } from 'react-router-dom'
import DSContext from '../../contexts/DSContext'
import SpotlightEvent from '../../components/SpotlightEvent/SpotlightEvent'
import DownstreamApiService from '../../services/downstream-api-service';

class Spotlight extends React.Component {
    static contextType = DSContext

    componentDidMount() {
        console.log('hello')
        DownstreamApiService.getEvents()
          .then(events => {
              console.log('added events')
              this.context.setEvents(events)
          })
          .catch(this.context.setError)
    }

    render() {
        
        const event = this.context.events[0]

        console.log(event)

        return (
            <main>
                <h1 className="spotlight-header">Spotlight</h1>
                <div className="spotlight-container">
                    <SpotlightEvent event={event} />
                    {/* <p className="center center-text">Click the flyer for more info!</p> */}
                    <div className="home-container">
                        <NavLink to="/events" className="home-event-button1 center">See All Events >></NavLink>
                    </div>
                </div>

                {/* <div className="spotlight-container">

                    <h3 class="center-text event-head-text">Lost Lands</h3>
                    <div className="spotlight-item-container center">
                        <div className="spotlight-info-container">
                            <div className="spotlight-info-details">
                                <i className="fas fa-info-circle"></i>
                            </div>
                        </div>
                        <img src="https://www.lostlandsfestival.com/wp-content/uploads/2020/05/preview-lightbox-TeaserGraphic_1920x1080_2-1200x675.jpg" className="spotlight-image" alt="spotlight" />
                    </div>



                </div> */}
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