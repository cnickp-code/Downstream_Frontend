import React from 'react';
import ReactDOM from 'react-dom';
import EventList from './EventList'
import DSContext from '../../contexts/DSContext'

const tempSched = [
    {
        "id": 4,
        "event_id": 1,
        "name": "Lost Lands",
        "image_url": "https://www.lostlandsfestival.com/wp-content/uploads/2020/05/preview-lightbox-TeaserGraphic_1920x1080_2-1200x675.jpg",
        "stream_url": "https://www.facebook.com",
        "info_url": "https://www.google.com",
        "description": "test description 1",
        "platform": "twitch",
        "genre": "dubstep",
        "start_date": "2029-01-22T16:28:32.615Z",
        "end_date": "2029-01-22T16:28:32.615Z",
        "artists": "Downlink, Excision"
    }
]

const contextValue = {
    searchTerm: 'test',
    searchSchedule: tempSched,
    schedule: tempSched
}

it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <DSContext.Provider value={contextValue}>
            <EventList />
        </DSContext.Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
})