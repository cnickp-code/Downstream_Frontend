import React from 'react';

class Spotlight extends React.Component {
    render() {
        return (
            <main>
                <div className="spotlight-container">
                    <h1 className="spotlight-header">Spotlight</h1>
                    <div className="spotlight-item-container">
                        <img src="https://billetto.co.uk/blog/wp-content/uploads/2019/06/zhqczjr9fho-e1560853535167.jpg" className="spotlight-image" alt="spotlight"/>
                        <div className="spotlight-button-container">
                            <a href="/eventinfo.html" className="details-button event-info">View Details</a>
                        </div>
                        {/* <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
                        <a className="next" onclick="plusSlides(1)">&#10095;</a> */}
                    </div>

                </div>
                {/* <div className="dot-container" style={'text-align:center'}>
                    <span className="dot" onclick="currentSlide(1)"></span>
                    <span className="dot" onclick="currentSlide(2)"></span>
                    <span className="dot" onclick="currentSlide(3)"></span>
                </div> */}
            </main>
        )
    }
}

export default Spotlight