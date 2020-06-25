import React from 'react'

const DSContext = React.createContext({
    events: [],
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
    deleteScheduleItem: () => {}
})

export default DSContext