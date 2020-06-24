import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Fab from '../../components/SearchFab/SearchFab'
import Sidebar from '../../components/Sidebar/Sidebar'
import EventList from '../../components/EventList/EventList'
import EventCover from '../../components/EventCover/EventCover'

class EventsPage extends React.Component {
    render() {
        return (
            <>
                <header>
                    <Header />
                </header>
                <main>
                    <Fab />
                    <div className="main-container">
                        <Sidebar />
                        <EventList />
                    </div>

                </main>
                <Footer />
            </>
        )
    }
}

export default EventsPage