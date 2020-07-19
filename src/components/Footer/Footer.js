import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className="center">
                <ul className="contact-footer">
                    <li><a href="https://www.instagram.com/bassheadcollective/?hl=en" target="_blank"><i className="fab fa-instagram contact-icon"></i></a></li>
                    <li><a href="https://twitter.com/Downstr90019240" target="_blank"><i className="fab fa-twitter contact-icon"></i></a></li>
                    {/* <li><a href="/"><i className="fab fa-facebook contact-icon"></i></a></li> */}
                </ul>
            </footer>
        )
    }
}

export default Footer