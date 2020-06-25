import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Fab from '../../components/SearchFab/SearchFab'
import Sidebar from '../../components/Sidebar/Sidebar'
import EventList from '../../components/EventList/EventList'
import DSEventContext from '../../contexts/DSEventContext'
import EventInfo from '../../components/EventInfo/EventInfo'

class EventsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showEventInfo: false,
            event: {}
        }
    }

    setEventInfo = (event) => {
        this.setState({
            showEventInfo: true,
            event
        })
    }

    hideEventInfo = () => {
        this.setState({
            showEventInfo: false
        })
    }

    render() {
        const contextValue = {
            event: this.state.event,
            showEventInfo: this.showEventInfo,
            setEventInfo: this.setEventInfo,
            hideEventInfo: this.hideEventInfo
        }


        return (
            <>
                <DSEventContext.Provider value={contextValue}>
                    <header>
                        <Header />
                    </header>
                    <main>
                        <Fab />
                        <div className="main-container">
                            <Sidebar />
                            <EventList />
                        </div>
                        {this.state.showEventInfo && <EventInfo />}
                    </main>
                    <Footer />
                </DSEventContext.Provider>

            </>
        )
    }
}

export default EventsPage