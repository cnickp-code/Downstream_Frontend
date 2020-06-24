import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className="center">
                <ul className="contact-footer">
                    <li><a href="/"><i className="fab fa-instagram contact-icon"></i></a></li>
                    <li><a href="/"><i className="fab fa-twitter contact-icon"></i></a></li>
                    <li><a href="/"><i className="fab fa-facebook contact-icon"></i></a></li>
                </ul>
            </footer>
        )
    }
}

export default Footer