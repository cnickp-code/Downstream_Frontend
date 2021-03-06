import React from 'react';
import Header from '../../components/Header/Header';
import Spotlight from '../../components/Spotlight/Spotlight';
import Footer from '../../components/Footer/Footer';
import DSContext from '../../contexts/DSContext';

class HomePage extends React.Component {
    static contextType = DSContext;

    render() {
        return (
            <>
                <div className="home-scroll-container">
                    <header>
                        <Header />
                    </header>
                    <Spotlight />
                </div>
                <Footer />
            </>
        )
    }
}

export default HomePage