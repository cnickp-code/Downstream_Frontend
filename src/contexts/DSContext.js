import React from 'react'

const EventContext = React.createContext({
    events: [],
    error: null,
    setEvents: () => {},
    setError: () => {},
    clearError: () => {}
})

export default EventContext