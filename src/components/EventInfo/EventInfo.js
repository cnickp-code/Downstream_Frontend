import React from 'react'
import DSContext from '../../contexts/DSContext'

class EventFocus extends React.Component {
    static contextType = DSContext

    render() {
        return (
            <div className="cover">
                <div className="cover-container">
                    <a href="/home.html" className="cover-exit"></a>
                    <h1 className="cover-event-title">Event Title</h1>
                    <img src="https://billetto.co.uk/blog/wp-content/uploads/2019/06/zhqczjr9fho-e1560853535167.jpg"
                        className="cover-event-image center" />
                    <div className="cover-event-info center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum neque facilis, obcaecati porro
                        accusantium, tenetur repellat perferendis impedit expedita est esse in maiores suscipit voluptas!
                        Omnis consequuntur hic illo corrupti.
                    <h3 className="cover-inner-title">Dates:</h3>
                        <div className="cover-list">Now - Then</div>
                        <h3 className="cover-inner-title">Genre:</h3>
                        <div className="cover-list">Dubstep</div>
                        <h3 className="cover-inner-title">Platform:</h3>
                        <div className="cover-list">Twitch</div>
                    </div>
                    <div className="cover-link-container center">
                        <a href="/" className="cover-nav-link">Link to Stream</a>
                        <a href="/" className="cover-nav-link">Add to Schedule</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventFocus