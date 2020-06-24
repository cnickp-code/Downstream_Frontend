import React from 'react'

const EventContext = React.createContext({
    events: [],
    error: null,
    schedule: [],
    setEvents: () => {},
    setError: () => {},
    clearError: () => {},
    addEvent: () => {}
})

export default EventContext