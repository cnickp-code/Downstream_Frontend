import React from 'react'

const DSContext = React.createContext({
    events: [],
    searchEvents: [],
    searchTerm: null,
    error: null,
    schedule: [],
    showAdd: false,
    showEventInfo: false,
    event: {},
    setEventInfo: () => {},
    hideEventInfo: () => {},
    setEvents: () => {},
    setError: () => {},
    clearError: () => {},
    addEvent: () => {},
    setShowAdd: () => {},
    addScheduleItem: () => {},
    deleteScheduleItem: () => {},
    setSearchEvents: () => {},
    setSearchTerm: () => {}
})

export default DSContext