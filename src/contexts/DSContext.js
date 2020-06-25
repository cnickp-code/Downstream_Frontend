import React from 'react'

const EventContext = React.createContext({
    events: [],
    error: null,
    schedule: [],
    showAdd: false,
    setEvents: () => {},
    setError: () => {},
    clearError: () => {},
    addEvent: () => {},
    setShowAdd: () => {}
})

export default EventContext