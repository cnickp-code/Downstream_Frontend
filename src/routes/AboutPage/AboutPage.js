import React from 'react'
import Header from '../../components/Header/Header'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import About from '../../components/About/About'

class AboutPage extends React.Component {
    render() {
        return (
            <>
                <header>
                    <Header />
                </header>
                <Nav />
                <main>
                    <About />
                </main>
                
                <Footer />
            </>
        )
    }
}

export default AboutPage