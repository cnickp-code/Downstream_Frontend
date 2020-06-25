import React from 'react';
import './App.css';
import Routes from './Routes'
import DownstreamApiService from './services/downstream-api-service'
import DSContext from './contexts/DSContext'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [],
      schedule: [],
      showAdd: false,
      showEventInfo: false,
      event: {},
      error: null
    }
  }

  addEvent = (event) => {
    const eventList = this.state.events
    this.setState({
      ...eventList,
      event
    })
  }

  setSchedule = (schedule) => {
    this.setState({
      schedule
    })
  }

  setEvents = (events) => {
    this.setState({
      events
    })
  }

  setShowAdd = (bool) => {
    this.setState({
      showAdd: bool
    })
  }

  setError = (error) => {
    this.setState({
      error
    })
  }

  clearError = () => {
    this.setState({
      error: null
    })
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
      events: this.state.events,
      error: this.state.error,
      schedule: this.state.schedule,
      showAdd: this.state.showAdd,
      event: this.state.event,
      showEventInfo: this.state.showEventInfo,
      setEventInfo: this.setEventInfo,
      hideEventInfo: this.hideEventInfo,
      setSchedule: this.setSchedule,
      setEvents: this.setEvents,
      setError: this.setError,
      clearError: this.clearError,
      addEvent: this.addEvent,
      setShowAdd: this.setShowAdd
    }

    console.log(this.state.event)
    console.log(this.state.schedule)

    return (
      <div className="App">
        <DSContext.Provider value={contextValue}>
          <Routes />
        </DSContext.Provider>

      </div>
    )
  }
}

export default App;
