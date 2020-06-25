import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Fab from '../../components/SearchFab/SearchFab'
import Sidebar from '../../components/Sidebar/Sidebar'
import EventList from '../../components/EventList/EventList'
import DSContext from '../../contexts/DSContext'
import EventInfo from '../../components/EventInfo/EventInfo'

class EventsPage extends React.Component {
    static contextType = DSContext

    render() {
        console.log(this.context.showEventInfo)
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
                    {this.context.showEventInfo && <EventInfo />}
                </main>
                <Footer />
            </>
        )
    }
}

export default EventsPage