import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import AddEvent from '../../components/AddEvent/AddEvent'

class AddEventPage extends React.Component {
    render() {
        return (
            <>
                <div className="home-scroll-container">
                    <header>
                        <Header />
                    </header>
                    <main>
                        <AddEvent />
                    </main>
                </div>
                <Footer />
            </>
        )
    }
}

export default AddEventPage