import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import News from '../../components/News/News';

class NewsPage extends React.Component {
    render() {
        return (
            <>
                <div className="home-scroll-container">
                    <header>
                        <Header />
                    </header>
                    <News />
                </div>
                <Footer />
            </>
        )
    }
}

export default NewsPage