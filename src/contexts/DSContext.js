import React from 'react'

const DSContext = React.createContext({
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

export default DSContext