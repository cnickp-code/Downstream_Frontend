import React from 'react'

const EventContext = React.createContext({
    showEventInfo: false,
    event: {},
    setEventInfo: () => {},
    hideEventInfo: () => {}
})

export default EventContext