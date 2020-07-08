import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Fab from '../../components/SearchFab/SearchFab';
import Sidebar from '../../components/Sidebar/Sidebar';
import EventList from '../../components/EventList/EventList';
import DSContext from '../../contexts/DSContext';
import EventInfo from '../../components/EventInfo/EventInfo';
import MobileSearch from '../../components/MobileSearch/MobileSearch';
import EventCoverImage from '../../components/EventCoverImage/EventCoverImage';

class EventsPage extends React.Component {
    static contextType = DSContext;
    

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
                        <EventList />
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

export default EventsPage