import React from 'react';
import Header from '../../components/Header/Header'
import Spotlight from '../../components/Spotlight/Spotlight'
import Footer from '../../components/Footer/Footer'

class HomePage extends React.Component {
    render() {
        return (
            <>
                <header>
                    <Header />
                </header>
                <Spotlight />
                <Footer />
            </>
        )
    }
}

export default HomePage