import React from 'react';
import Header from '../../components/Header/Header'
import Spotlight from '../../components/Spotlight/Spotlight'
import Footer from '../../components/Footer/Footer'
import DownstreamApiService from '../../services/downstream-api-service'
import DSContext from '../../contexts/DSContext'

class HomePage extends React.Component {
    static contextType = DSContext

    componentDidMount() {
        DownstreamApiService.getEvents()
          .then(events => {
            this.context.setEvents(events)
          })
          .catch(this.context.setError)
    
        DownstreamApiService.getSchedule()
          .then(items => {
            this.context.setSchedule(items)
          })
          .catch(this.context.setError)
      }
    render() {
        return (
            <>
                <div className="home-scroll-container">
                    <header>
                        <Header />
                    </header>
                    <Spotlight />
                </div>
                <Footer />
            </>
        )
    }
}

export default HomePage