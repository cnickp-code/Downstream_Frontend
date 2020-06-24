import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Fab from '../../components/SearchFab/SearchFab'
import Sidebar from '../../components/Sidebar/Sidebar'
import ScheduleEventList from '../../components/ScheduleEventList/ScheduleEventList'

class SchedulePage extends React.Component {
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
                        <ScheduleEventList />
                    </div>
                </main>
                <Footer />
            </>
        )
    }
}

export default SchedulePage