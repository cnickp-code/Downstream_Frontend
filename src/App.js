import React from 'react';
import './App.css';
import Routes from './Routes'
import DSContext from './contexts/DSContext'
import DownstreamApiService from './services/downstream-api-service'
import TokenService from './services/token-service';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [],
      schedule: [],
      showAdd: false,
      showEventInfo: false,
      showMobileSearch: false,
      event: {},
      error: null
    }
  }

  addScheduleItem = (item) => {
    console.log(`Reached add schedule item`)
    const scheduleList = [...this.state.schedule, item]

    this.setState({
      schedule: scheduleList
    })
  }

  deleteScheduleItem = (id) => {
    const scheduleList = this.state.schedule.filter(sched => sched.id !== id)

    this.setState({
      schedule: scheduleList
    })
  }

  addEvent = (event) => {
    const newEventList = [...this.state.events, event]

    this.setState({
      events: newEventList
    })
  }

  setSchedule = (schedule) => {
    this.setState({
      schedule
    })
  }

  setEvents = (events) => {
    const clientEvents = events.map(event => {
      const addedObj = { added: false}
      const newEvent = Object.assign(event, addedObj)

      return newEvent
    })

    clientEvents.forEach(event => {
      this.state.schedule.forEach(item => {
        if(item.name === event.name) {
          event.added = true;
        }
      })
      return event;
    })

    this.setState({
      events: clientEvents
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

  setShowMobileSearch = () => {
    this.setState({
      showMobileSearch: true
    })
  }

  hideMobileSearch = () => {
    this.setState({
      showMobileSearch: false
    })
  }

  componentDidMount() {
      DownstreamApiService.getEvents()
        .then(events => {
            this.setEvents(events)
        })
        .catch(this.setError)

  }

  render() {
    const contextValue = {
      events: this.state.events,
      error: this.state.error,
      schedule: this.state.schedule,
      showAdd: this.state.showAdd,
      event: this.state.event,
      showEventInfo: this.state.showEventInfo,
      showMobileSearch: this.state.showMobileSearch,
      setEventInfo: this.setEventInfo,
      hideEventInfo: this.hideEventInfo,
      setSchedule: this.setSchedule,
      setEvents: this.setEvents,
      setError: this.setError,
      clearError: this.clearError,
      addEvent: this.addEvent,
      setShowAdd: this.setShowAdd,
      addScheduleItem: this.addScheduleItem,
      deleteScheduleItem: this.deleteScheduleItem,
      setShowMobileSearch: this.setShowMobileSearch,
      hideMobileSearch: this.hideMobileSearch
    }

    console.log(this.state.events)
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
