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
      searchEvents: [],
      searchSchedule: [],
      searchTerm: "",
      schedule: [],
      showAdd: false,
      showEventInfo: false,
      showCoverImage: false,
      showMobileSearch: false,
      event: {},
      error: null
    }
  }

  toggleCoverImage = () => {
    console.log('toggle cover image reached')
    const showCoverImage = !this.state.showCoverImage
    this.setState({
      showCoverImage
    })
  }

  addScheduleItem = (item) => {
    const scheduleList = [...this.state.schedule, item]

    const events = this.state.events.map(event => {
      if(event.id === item.event_id) {
        const newEvent = {
          ...event,
          added: true
        }
        return newEvent
      } else {
        return event
      }
      
    })



    this.setState({
      schedule: scheduleList,
      events
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
    const events = this.state.events.map(event => {
      const isEventInSched = schedule.find(item => item.event_id === event.id)

      const newEvent = {
        ...event,
        added: true
      }

      if(isEventInSched) {
        return newEvent
      }

      return event;
    })

    this.setState({
      schedule,
      events
    })
  }

  setSearchTerm = (term) => {
    const searchTerm = term

    this.setState(prevState => {
      const searchEvents = prevState.events.filter(event => {
        return (
          event.name.toLowerCase().includes(searchTerm.toLowerCase())
          || event.name.toLowerCase().includes(searchTerm.toLowerCase())
          || event.genre.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });

      const searchSchedule = prevState.schedule.filter(item => {
        return (
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
          || item.name.toLowerCase().includes(searchTerm.toLowerCase())
          || item.genre.toLowerCase().includes(searchTerm.toLowerCase())
        );
      })

      return {
        searchTerm,
        searchEvents,
        searchSchedule
      };
    });
  }

  setSearchEvents = () => {
    DownstreamApiService.getEvents()
      .then(events => {
        const { searchTerm } = this.state
        const searchEvents = events.filter(event => {
          return (
            event.name.toLowerCase().includes(searchTerm.toLowerCase())
            || event.name.toLowerCase().includes(searchTerm.toLowerCase())
            || event.genre.toLowerCase().includes(searchTerm.toLowerCase())
          )
        });

        this.setState({
          events,
          searchEvents
        })
      })

    DownstreamApiService.getSchedule()
      .then(items => {
        const { searchTerm } = this.state
        const searchSchedule = items.filter(item => {
          return (
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
            || item.name.toLowerCase().includes(searchTerm.toLowerCase())
            || item.genre.toLowerCase().includes(searchTerm.toLowerCase())
          );
        })

        this.setState({
          searchSchedule,
          schedule: items
        })
      })
      .catch(this.setError)
  }

  setSortedEvents = (events) => {
    this.setState({
      events
    })
  }

  setEvents = (events) => {
    const currentDate = new Date();
    const clientEvents = events.map(event => {
      let pastObj = { past: false }
      if (currentDate > event.end_date) {
        pastObj = { past: true }
      }

      const addedObj = { added: false }
      const newEvent = Object.assign(event, addedObj, pastObj)

      return newEvent
    })

    clientEvents.forEach(event => {
      this.state.schedule.forEach(item => {
        if (item.name === event.name) {
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

    DownstreamApiService.getSchedule()
      .then(items => {
        this.setSchedule(items)
      })
      .catch(this.setError)
  }

  render() {
    const contextValue = {
      events: this.state.events,
      searchEvents: this.state.searchEvents,
      searchSchedule: this.state.searchSchedule,
      searchTerm: this.state.searchTerm,
      error: this.state.error,
      schedule: this.state.schedule,
      showAdd: this.state.showAdd,
      event: this.state.event,
      showEventInfo: this.state.showEventInfo,
      showMobileSearch: this.state.showMobileSearch,
      showCoverImage: this.state.showCoverImage,
      toggleCoverImage: this.toggleCoverImage,
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
      hideMobileSearch: this.hideMobileSearch,
      setSearchTerm: this.setSearchTerm,
      setSearchEvents: this.setSearchEvents,
      setSortedEvents: this.setSortedEvents
    }

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
