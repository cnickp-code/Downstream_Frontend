import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Fab from '../../components/SearchFab/SearchFab'
import Sidebar from '../../components/Sidebar/Sidebar'
import ScheduleEventList from '../../components/ScheduleEventList/ScheduleEventList'
import EventInfo from '../../components/EventInfo/EventInfo'
import DSContext from '../../contexts/DSContext'
import MobileSearch from '../../components/MobileSearch/MobileSearch'
import EventCoverImage from '../../components/EventCoverImage/EventCoverImage'

class SchedulePage extends React.Component {
    static contextType = DSContext
    
    render() {
        return (
            <>
                <header>
                    <Header />
                </header>
                <main>
                    <Fab />
                    <div className="main-container">
                        {this.context.showSideBar && <Sidebar />}
                        <ScheduleEventList />
                    </div>
                    {this.context.showEventInfo && <EventInfo />}
                    {this.context.showMobileSearch && <MobileSearch />}
                    {this.context.showCoverImage && <EventCoverImage />}
                </main>
                <Footer />
            </>
        )
    }
}

export default SchedulePage